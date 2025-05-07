import { getScrollBar } from "../Scroll/ScrollAccess";
import { Swiper, SwiperSlide } from 'swiper/react';
 

import 'swiper/css';
import 'swiper/css/free-mode';

import { FreeMode } from 'swiper/modules';
 
export default function DraggableSlider({ images }) {
 
 
  return (
    <Swiper
      onSlideChangeTransitionStart={() =>  getScrollBar()?.updatePluginOptions("overflow", { open: true })}
      onSlideChangeTransitionEnd={() => getScrollBar()?.updatePluginOptions("overflow", { open: false })}
      spaceBetween={0}
      breakpoints={{
        1200: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 1,
        },
      }}
      freeMode={true}
      modules={[ FreeMode ]}
      grabCursor={true}
      speed={1000}>
      
      {images.map((el, i) => (
        <SwiperSlide 
          key={i}>
          <img
            src={el}
            alt={`slider-img-${i + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
