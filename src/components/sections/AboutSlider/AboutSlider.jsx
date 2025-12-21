import DraggableSlider from '@components/shared/DraggableSlider/DraggableSlider'
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
        images={[ {src: img1},
          {src: img2},
          {src: img3},
          {src: img4},
          {src: img1},
          {src: img2},
          {src: img3},
          {src: img4 },
          {src: img1},
          {src: img2},
          {src: img3},
          {src: img4},
          {src: img1},
          {src: img2},
          {src: img3},
          {src: img4}
        ]}
        options={ { dragFree: true}} />
    </section>
  )
}
