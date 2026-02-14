import { useRef } from 'preact/hooks'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { gsap } from 'gsap'
import useAnimation from '@hooks/useAnimation'

export default function ScrollParallaxImage({
  src,
  wrapperClass,
  imageHeight = '140%',
}) {
  const containerRef = useRef(null)

  useAnimation((options) => {
    const image = containerRef.current.querySelector('span')

    gsap.to(image, {
      y: () =>
        image.offsetHeight - containerRef.current.offsetHeight,
      ease: 'none',
      scrollTrigger: {
        id: "#scrollImageParallax",
        trigger: containerRef.current,
        invalidateOnRefresh: false,
        scrub: true,
        pin: false,
        ...options,
      },
    })
  })

  return (
    <div
      ref={containerRef}
      className={wrapperClass}>
      <LazyLoadImage
        src={src}
        width="100%"
        height={imageHeight}
        effect="opacity" />
    </div>
  )
}
