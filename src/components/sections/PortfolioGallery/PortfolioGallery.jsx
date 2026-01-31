import { useEffect, useRef } from 'preact/hooks'
import DraggableSlider from '@components/shared/DraggableSlider/DraggableSlider'
import './portfolioGallery.scss'
export default function PortfolioGallery({ images }) {
  const sectionRef = useRef(null)


  useEffect(() => {
    if (!sectionRef.current) return

    const prevSection = sectionRef.current.previousElementSibling
    if (!prevSection) return


    const container = prevSection.querySelector('.container')
    if (!container) return

    const updateOffset = () => {
      const rect = container.getBoundingClientRect()
      const style = getComputedStyle(container)
      const paddingLeft = parseFloat(style.paddingLeft)

      sectionRef.current.style.marginLeft =
        rect.left + paddingLeft + 'px'
    }

    updateOffset()
    window.addEventListener('resize', updateOffset)

    return () =>
      window.removeEventListener('resize', updateOffset)
  }, [])
  return (
    <section
      ref={sectionRef}
      id="project-gallery">
      <DraggableSlider
        options={{ dragFree: true }}
        images={images.map((src) => ({ src: `${import.meta.env.BASE_URL}${src}` }))} />
    </section>
  )
}
