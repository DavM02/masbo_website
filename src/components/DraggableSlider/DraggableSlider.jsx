import { getScrollBar } from "../Scroll/ScrollAccess";
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useCallback } from "preact/hooks";
import './DraggableSlider.css'
export default function DraggableSlider({ images, options }) {
 
  const [ emblaRef, emblaApi ] = useEmblaCarousel(options)
  
  const handleOpen = useCallback(() => {
    getScrollBar()?.updatePluginOptions("overflow", { open: true })
       
  }, [])
  
  const handleClose = useCallback(() => {
    getScrollBar()?.updatePluginOptions("overflow", { open: false })
 
  }, [])
  
  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('pointerDown', handleOpen);
      emblaApi.on('pointerUp', handleClose);
    }
  }, [ emblaApi,
    handleClose,
    handleOpen ]);

  return (
    <div
      className="embla">
      <div
        className="embla__viewport"
        ref={emblaRef}>
        <div
          className="embla__container">
          
          {images.map((el, i) => (
            <div
              key={i}
              className="embla__slide">
              <img
                src={el}
                alt={`slider-img-${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

 
    </div>
  // <Flicking
  //   inputType={[ "touch", "mouse" ]} 
  //   onMoveStart={onMoveStart}
  //   onMoveEnd={onMoveEnd}
  //   horizontal={true}
  //   circular={false}
  //   moveType="freeScroll"  
  //   deceleration={0.0035}  
  //   bounce={250}          
  //   autoResize={true}
  //   bound={true}>
  //   {images.map((el, i) => (
  //     <div
  //       key={i}
  //       className="flicking-panel">
  //       <img
  //         src={el}
  //         alt={`slider-img-${i + 1}`} />
  //     </div>
  //   ))}
  // </Flicking>
  );
}
