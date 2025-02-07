import './homeScrol.scss'
import img1 from "@assets/img-1.jpg"
import img2 from "@assets/img-2.jpg"
import img3 from "@assets/img-3.jpg"
import img4 from "@assets/img-4.jpg"

import img5 from "@assets/img-5.jpg"
import img6 from "@assets/img-6.jpg"
import img7 from "@assets/img-7.jpg"
import img8 from "@assets/img-8.jpg"

import { LazyLoadImage } from 'react-lazy-load-image-component'
export default function HomeScroll() {
  return (
    <section
      id="home-scroll">
      <div
        className='row'>
        
        <div></div>

        <div
          className='row'>
          <div>
            <div></div>

            <div></div>

            <div
              className='placeholder-2'>
              <LazyLoadImage
                src={img1}
                width={"100%"}
                height={"100%"}
                effect="blur"
                alt={"img-1"} />
            </div>
          </div>
          
          <div
            className='placeholder-1'>
            <LazyLoadImage
              src={img2}
              width={"100%"}
              height={"100%"}
              effect="blur"
              alt={"img-2"} />
          </div>
          
          <div>

            <div
              className='placeholder-2'>

              <LazyLoadImage
                src={img3}
                width={"100%"}
                height={"100%"}
                effect="blur"
                alt={"img-3"} />
            </div>

            <div
              className='placeholder-1'>

              <LazyLoadImage
             
                src={img4}
                width={"100%"}
                height={"100%"}
                effect="blur"
                alt={"img-4"} />
            </div>

          </div>
        </div>



        <div
          className='row'>
          <div>
            <div
              className='placeholder-1'>

              <LazyLoadImage
                src={img5}
                width={"100%"}
                height={"100%"}
                effect="blur"
                alt={"img-5"} />

            </div>

            <div>



            </div>
          </div>

          <div
            className='placeholder-2'>

            <LazyLoadImage
              src={img6}
              width={"100%"}
              height={"100%"}
              effect="blur"
              alt={"img-6"} /> 
          </div>

          <div>
            <div></div>

            <div
              className='placeholder-2'>

              <LazyLoadImage
                src={img7}
                width={"100%"}
                height={"100%"}
                effect="blur"
                alt={"img-7"} /> 

            </div>

            <div
              className='placeholder-1'>
              <LazyLoadImage
                src={img8}
                width={"100%"}
                height={"100%"}
                effect="blur"
                alt={"img-8"} /> 

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
