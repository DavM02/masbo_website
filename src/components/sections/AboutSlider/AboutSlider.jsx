import DraggableSlider from '@components/DraggableSlider/DraggableSlider'
import './aboutSlider.scss'
import img1 from '@assets/img-21.jpg'
import img2 from '@assets/img-22.jpg'
import img3 from '@assets/img-23.jpg'
import img4 from '@assets/img-24.jpg'
export default function AboutSlider() {
  return (
    <section
      id='about-slider'>
      <DraggableSlider
        images={[ img1,
          img2,
          img3,
          img4,
          img1,
          img2,
          img3,
          img4,
          img1,
          img2,
          img3,
          img4,
          img1,
          img2,
          img3,
          img4 ]} />
    </section>
  )
}
