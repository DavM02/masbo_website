import { getScrollBar } from "../Scroll/ScrollAccess";
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useCallback, useState } from "preact/hooks";
import './DraggableSlider.css'

export default function DraggableSlider({ images, options }) {
  const [ emblaRef, emblaApi ] = useEmblaCarousel({
    ...options,
  })
  const [ isTransitioning, setIsTransitioning ] = useState(false)

  const handleOpen = useCallback(() => {
    getScrollBar()?.updatePluginOptions("overflow", { open: true })
    setIsTransitioning(true)
  }, [])

  const handleClose = useCallback(() => {
    getScrollBar()?.updatePluginOptions("overflow", { open: false })
  
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('pointerDown', handleOpen)
    emblaApi.on('pointerUp', handleClose)

    return () => {
      emblaApi.off('pointerDown', handleOpen)
      emblaApi.off('pointerUp', handleClose)
    }
  }, [ emblaApi,
    handleOpen,
    handleClose ])

  return (
    <div
      className="embla">
      <div
        className="embla__viewport"
        ref={emblaRef}>
        <div
          onTransitionEnd={() =>  setIsTransitioning(false)}
          className={`embla__container ${!isTransitioning ? 'no-transition' : 'is-transitioning'}`}>
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
  )
}
