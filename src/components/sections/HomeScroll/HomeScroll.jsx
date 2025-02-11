import './homeScrol.scss'
import img1 from "@assets/img-1.jpg"
import img2 from "@assets/img-2.jpg"
import img3 from "@assets/img-3.jpg"
import img4 from "@assets/img-4.jpg"

import img5 from "@assets/img-5.jpg"
import img6 from "@assets/img-6.jpg"
import img7 from "@assets/img-7.jpg"
import img8 from "@assets/img-8.jpg"
import img9 from "@assets/img-9.jpg"
import img10 from "@assets/img-10.jpg"

import icon1 from "@assets/icons/icon-1.svg"
import icon2 from "@assets/icons/icon-2.svg"
import icon3 from "@assets/icons/icon-3.svg"
import icon4 from "@assets/icons/icon-4.svg"
import icon5 from "@assets/icons/icon-5.svg"

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from 'gsap';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useLayoutEffect, useRef } from 'preact/hooks'
export default function HomeScroll() {

  const numRefs = useRef()
  const numbers = [
    { num: 123, title: "successful projects" },
    { num: 1235, title: "people who work with us" },
    { num: 23, title: "urban planning projects" },
    {num: 1012, title: "Modern interiors "}
  ]
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {});

    const createAnimation = () => {
      ctx.revert();
    
      requestAnimationFrame(() => {
        if (numRefs.current) {
          numRefs.current.querySelectorAll("li h2").forEach((counter, i) => {
            gsap.to(counter, {
              innerText: numbers[i].num,
              duration: 2,
              ease: "power1.out",
              snap: { innerText: 1 },
              scrollTrigger: {
                trigger: "#home-scroll .container",
                start: "top top",
                toggleActions: "play none none none",
              },
            });
          });
          ScrollTrigger.refresh();
        }
      });
    };

    createAnimation();

    return () => ctx.revert();
  }, []);


  return (
    <section
      id="home-scroll">
      <div
        className='row'>
        
        <div
          className='container column end-x'>

          <div
            className='row center-y gap-50'>
            <h1
              className='capitalize'>
              from idea 
              <br /> to life
            </h1>


            <p
              className='to-small text-white capitalize'>
              Arhitecture modern technology
              <br /> MasBo is an architectural group working in the field of

              <br /> architecture and urban planning. For our customers, we are known 

              <br />as a reliable partner with high standards of quality and 

              <br /> responsibility.
            </p>
          </div>

          <ul
            className='row wrap gap-150'
            ref={numRefs}>
            {numbers.map((el, i) => {
              return (
                <li
                  key={i}>
                  <h2>
                    0 
                  </h2>

                  <span
                    className='fs-14 text-white capitalize'>
                    {el.title}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>

        <div
          className='row'>
          <div>
       

            <div
              className='column center-y center-x gap-10'>
              <img
                className='icon'
                alt='icon'
                src={icon1} />

              <h6>
                Architecture
              </h6>

              <p
                className='to-small text-white capitalize'>
                MasBo is an architectural group working in 
                <br /> the field of architecture and urban planning.
              </p>
            </div>
            

     
            <div
              className='column center-y center-x gap-10'>
              <img
                className='icon'
                alt='icon'
                src={icon2} />

              <h6>
                Engineering

              </h6>

              <p
                className='to-small text-white capitalize'>
                modern solutions for the modern city.
              </p>
            </div>

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

            <div
              className='column center-y center-x gap-10'>
              <img
                className='icon'
                alt='icon'
                src={icon3} />

              <h6>
                Construction

              </h6>

              <p
                className='to-small text-white capitalize'>
                MasBo is an architectural group working in <br />
                the field of architecture and urban planning.
              </p>
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
            <div
              className='column center-y center-x gap-10'>
              <img
                className='icon'
                alt='icon'
                src={icon4} />

              <h6>
                Interior
              </h6>

              <p
                className='to-small text-white capitalize'>
                MasBo is an architectural group working in 
                <br /> the field of architecture and urban planning.
              </p>
            </div>

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

          <div
            className='placeholder-1'>
            <LazyLoadImage
              src={img9}
              width={"100%"}
              height={"100%"}
              effect="blur"
              alt={"img-9"} /> 
          </div>

          <div>

            <div
              className='placeholder-2'>
              <LazyLoadImage
                src={img10}
                width={"100%"}
                height={"100%"}
                effect="blur"
                alt={"img-10"} /> 
            </div>

            <div
              className='column center-y center-x gap-10'>
              <img
                className='icon'
                alt='icon'
                src={icon1} />

              <h6>
                Landscape Design
              </h6>

              <p
                className='to-small text-white capitalize'>
                MasBo is an architectural group working in 
                <br /> the field of architecture and urban planning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
