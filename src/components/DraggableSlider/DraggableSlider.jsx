import { getScrollBar } from "../Scroll/ScrollAccess";
import { Swiper, SwiperSlide } from 'swiper/react';
 

import 'swiper/css';
import 'swiper/css/free-mode';

import { FreeMode } from 'swiper/modules';
 
export default function DraggableSlider({ width = 'max(500px, calc(100vw/4))', height = "max(500px, calc(100vw/4))", images,  }) {
 
 
  return (
    <Swiper
      onSlideChangeTransitionStart={() =>  getScrollBar()?.updatePluginOptions("overflow", { open: true })}
      onSlideChangeTransitionEnd={() => getScrollBar()?.updatePluginOptions("overflow", { open: false })}
      spaceBetween={0}
      slidesPerView={2}
      freeMode={true}
      modules={[ FreeMode ]}
      grabCursor={true}
      speed={1000}>
      
      {images.map((el, i) => (
        <SwiperSlide 
          style={{ width, height}}
          key={i}>
          <img
            src={el}
            alt={`slider-img-${i + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
