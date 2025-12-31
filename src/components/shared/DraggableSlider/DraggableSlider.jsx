import { useImperativeHandle, useEffect, useCallback, useState } from "preact/hooks";
import { forwardRef } from 'preact/compat';
import useEmblaCarousel from 'embla-carousel-react';
import { getScrollBar } from "../../Scroll/ScrollAccess";
import './draggableSlider.scss'
import { LazyLoadImage } from "react-lazy-load-image-component";
const DraggableSlider = forwardRef(({ images, options, ...props}, ref) => {
  const [ emblaRef, emblaApi ] = useEmblaCarousel({
    ...options,
    align: 'start',
  });

  const [ isTransitioning, setIsTransitioning ] = useState(false);

  const handleOpen = useCallback(() => {
    getScrollBar()?.updatePluginOptions("overflow", { open: true });
    !props.cancelTransition && setIsTransitioning(true);
  }, []);

  const handleClose = useCallback(() => {
    getScrollBar()?.updatePluginOptions("overflow", { open: false });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const updateIndex = () => {
      props?.setCurrentIndex?.(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', updateIndex);
    emblaApi.on('pointerDown', handleOpen);
    emblaApi.on('pointerUp', handleClose);

    return () => {
      emblaApi.off('select', updateIndex);
      emblaApi.off('pointerDown', handleOpen);
      emblaApi.off('pointerUp', handleClose);
    };
  }, [ emblaApi,
    handleOpen,
    handleClose,
    props ]);


  useImperativeHandle(ref, () => ({
    scrollTo: (index) => {
      emblaApi?.scrollTo(index);
    }
  }), [ emblaApi ]);

  return (
    <div
      className="embla">
      <div
        className="embla__viewport"
        ref={emblaRef}>
        <div
          onTransitionEnd={(e) => { if(e.propertyName === "transform") setIsTransitioning(false)}}
          className={`embla__container ${!isTransitioning ? 'no-transition' : 'is-transitioning'}`}>
          {images.map((el, i) => (
            <div
              key={i}
              className={`embla__slide placeholder-${(i % 3) + 1}`}>
              <LazyLoadImage
                width={"100%"}
                height={"100%"}
                effect="opacity"
                src={el.src}
                alt={`slider-img-${i + 1}`} />

              {el?.children}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default DraggableSlider;
