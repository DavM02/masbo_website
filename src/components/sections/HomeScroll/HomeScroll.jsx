import './homeScrol.scss'
import './media.scss'
import img1 from "@assets/img-1.jpg"
import img2 from "@assets/img-2.jpg"
import img3 from "@assets/img-3.jpg"
import img4 from "@assets/img-4.jpg"

import play from "@assets/icons/play.svg"
 
import img5 from "@assets/img-5.jpg"
import img6 from "@assets/img-6.jpg"
import img7 from "@assets/img-7.jpg"
import img8 from "@assets/img-8.jpg"
import img9 from "@assets/img-9.jpg"
import img10 from "@assets/img-10.jpg"
import img11 from "@assets/img-11.jpg"
import img12 from "@assets/img-12.jpg"

import img13 from "@assets/img-13.jpg"
import img14 from "@assets/img-14.jpg"
import img15 from "@assets/img-15.jpg"
import img16 from "@assets/img-16.jpg"
import img17 from "@assets/img-17.jpg"
import img18 from "@assets/img-18.jpg"

import img19 from "@assets/img-19.jpg"
import img20 from "@assets/img-20.jpg"

import icon1 from "@assets/icons/icon-1.svg"
import icon2 from "@assets/icons/icon-2.svg"
import icon3 from "@assets/icons/icon-3.svg"
import icon4 from "@assets/icons/icon-4.svg"
import icon5 from "@assets/icons/icon-5.svg"
import icon6 from "@assets/icons/icon-6.svg"
import { MainContext } from "@context/MainContext";
import useMediaQ from "@hooks/useMediaQ"
import { gsap } from 'gsap';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useRef, useContext } from 'preact/hooks'
import { useGSAP } from '@gsap/react';
import MainButton from '@components/ui/buttons/MainButton'
import Socials from '@components/socials/Socials'
import ScrollIndicator from './ScrollIndicator'

export default function HomeScroll() {
  const {   scrollTweenAccess } = useContext(MainContext);
 
  const numbers = [
    { num: 123, title: "successful projects" },
    { num: 1235, title: "people who work with us" },
    { num: 23, title: "urban planning projects" },
    {num: 1012, title: "Modern interiors "}
  ]

  const sectionRef = useRef(null)

 

  const width = useMediaQ("(min-width: 1025px)")
  const height = useMediaQ("(min-height: 657px)")
 
  const data = [
    {
      img: img2,
      title: "How the industrial zone turned into a colorful microdistrict",
      date: "25 september ", description: "We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action."
    },
    {
      img: img11,
      title: "How the industrial zone turned into a colorful microdistrict",
      date: "25 september ", description: "We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action."
    },
    {
      img: img12,
      title: "How the industrial zone turned into a colorful microdistrict",
      date: "25 september ", description: "We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action."
    }
  ]

 
  useGSAP(() => {
 
    requestAnimationFrame(() => {
      const numItems = gsap.utils.toArray("li h2")
      numItems.forEach((counter, i) => {
        gsap.to(counter, {
          innerText: numbers[i].num,
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: ".row > .container",
            start: "top 20%",
            toggleActions: "play none none none",

          },
              
        });
      });
           
      const data = gsap.utils.toArray("li .placeholder-1")
   
      data.forEach((placeholder) => {
            
        gsap.set(placeholder, {
          clipPath: "inset(0 100% 0 0)"
        });

        let options = {}

        if (height && width) {
          options.containerAnimation = scrollTweenAccess.current
        } else {
          options = {}
        }
 
        gsap.to(placeholder, {
          ease: "none",
          clipPath: "inset(0)",  
          scrollTrigger: {
            trigger: ".projects-list",
            start: "left 30%",
            toggleActions: "play none none none",
            ...options,
          }
        });
      });
    })
 
  }, {scope: sectionRef, dependencies: [ width, height ], revertOnUpdate: true});


  return (
    <section
      ref={sectionRef}
      id="home-scroll">


      <div
        className='row'>
        
        <div
          className='container column end-x'>

          <div
            className='row center-y'>
            <div
              className='text-wrapper  center-y row gap-50'>
              
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

            <div
              className='play self-center-y center-gr'>
              <img
                className='icon'
                src={play}
                alt='arrow' />
            </div>
          </div>

          <ul
            className='row wrap gap-150'>
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


          
          {width &&  <Socials />}
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
                className='to-middle text-center text-white capitalize'>
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
                className='to-middle text-center text-white capitalize'>
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
            
            <div
              className='description'>
              <h1
                className='capitalize'>
                
                inovative 
                <br /> engineering &

                <br /> architecture 

                <br />  solutions
              </h1>
             
              <p
                className='to-middle text-white capitalize'>
                We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action. An individual approach and attention to detail in the development of engineering systems allows us to obtain reliable, verified solutions. Simply put, we think over the operation of facilities based on practical experience and scientific knowledge.
              </p>

              <MainButton
                arrow={false}
                type="button">
                Order The Project
              </MainButton>
            </div>

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
                className='to-middle text-center text-white capitalize'>
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
            
            <div
              className='description'>
              <h1
                className='capitalize'>
                
                inovative 
                <br /> engineering 

                <br /> solutions
              </h1>
             
              <p
                className='to-middle text-white capitalize'>
                We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action. An individual approach and attention to detail in the development of engineering systems allows us to obtain reliable, verified solutions. Simply put, we think over the operation of facilities based on practical experience and scientific knowledge.
              </p>

              <MainButton
                arrow={false}
                type="button">
                Order The Project
              </MainButton>
            </div>
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
                className='to-middle text-center text-white capitalize'>
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

            <div
              className='description'>
              <h1
                className='capitalize'>
                
             
                interior &
                <br /> landscape 

                <br />  design
              </h1>
             
              <p
                className='to-middle text-white capitalize'>
                We create a comfortable space for living and working, entertainment and education. High-quality and thoughtful design not only pleases the eye, but creates a healthy environment for a comfortable and intuitive use of the room.
              </p>

              <MainButton
                arrow={false}
                type="button">
                Order The Project
              </MainButton>
            </div>
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
                className='to-middle text-center text-white capitalize'>
                MasBo is an architectural group working in 
                <br /> the field of architecture and urban planning.
              </p>
            </div>


          </div>

        </div>

        <section
          className='projects-list row center-y'>
          <div
            className='container'>
            <div
              className='text-wrapper row gap-50'>
              <h1
                className='capitalize'>
                how we are
                <br /> working
              </h1>


              <div>
                <p
                  className='to-middle text-white capitalize'>
                  Arhitecture modern technology
                  Collaboration is a priority at MasBo. We believe that the best result can only be achieved through constant dialogue between all stakeholders. Our practice brings together experts in the field of architecture, design, engineering and construction, to solve any tasks assigned to us.
                </p>

                <MainButton
                  type="button">
                  learn more
                </MainButton>
              </div>

            </div>

            <ul
           
              className='data row gap-85'>
              {data.map((el, i) => {
                return (<li
                  key={i}>
                  <div
                    className='placeholder-1'>
                    <LazyLoadImage
                      src={el.img}
                      width={"100%"}
                      height={"127px"}
                      effect="blur"
                      alt={`img-${i + 1}`} /> 
                  </div>

                  <span
                    className='up-case font-reg text-white'>
                    {el.date}
                  </span>

                  <h5>{el.title}</h5>

                  <p
                    className='to-middle text-white capitalize'>
                    {el.description}
                  </p>
                </li>)
              })}
            </ul>
          </div>
        </section>

        <section
          className="services">
          <div
            className="row">
          
            <div
              className={"placeholder-2"}>
              <LazyLoadImage
                src={img13}
                width={"100%"}
                height={"100%"}
                effect="blur"
                alt={"img-13"} />
              
              <div
                className='column center-y center-x gap-10'>
                <img
                  className='icon'
                  alt='icon'
                  src={icon4} />

                <h6>
                  Interior
                </h6>
              </div>
            </div>

            <div
              className={"placeholder-1"}>
              <LazyLoadImage
                src={img14}
                width={"100%"}
                height={"100%"}
                effect="blur"
                alt={"img-14"} />
              
              <div
                className='column center-y center-x gap-10'>
                <img
                  className='icon'
                  alt='icon'
                  src={icon1} />

                <h6>
                  Architecture
                </h6>
 
              </div>
            </div>

            <div
              className={"placeholder-2"}>
              <LazyLoadImage
                src={img15}
                width={"100%"}
                height={"100%"}
                effect="blur"
                alt={"img-15"} />
              
              <div
                className='column center-y center-x gap-10'>
                <img
                  className='icon'
                  alt='icon'
                  src={icon2} />

                <h6>
                  Engineering

                </h6>

 
              </div>
            </div>

            <div
              className={"placeholder-1"}>
              <LazyLoadImage
                src={img16}
                width={"100%"}
                height={"100%"}
                effect="blur"
                alt={"img-16"} />
              

              <div
                className='column center-y center-x gap-10'>
                <img
                  className='icon'
                  alt='icon'
                  src={icon3} />

                <h6>
                  Construction

                </h6>
 
   
              </div>
            </div>
          </div>

          <div
            className={"row"}>
            
            <div
              className={"placeholder-2"}>
              <LazyLoadImage
                src={img17}
                width={"100%"}
                height={"100%"}
                effect="blur"
                alt={"img-17"} />
              
              <div
                className='column center-y center-x gap-10'>
                <img
                  className='icon'
                  alt='icon'
                  src={icon5} />

                <h6>
                  Landscape Design

                </h6>
              </div>
            </div>


 
       
            <div
              className="container">
              <div
                className="row center-x center-y">
                <div
                  className='text-wrapper row gap-50'>
                  <h1
                    className='capitalize'>
                    What we 

                    <br /> engage?
                  </h1>


                  <div>
                    <p
                      className='to-middle text-white capitalize'>
                      Our portfolio is a long-term experience, a variety of complex projects and the implementation of innovative solutions. We approach each client and his project as a unique challenge that we accept. Responsibly performing our work, we will confidently bring it to life.
                    </p>

                    <MainButton
                      arrow={true}
                      type="button">
                      learn more
                    </MainButton>
                  </div>

           
                </div>
              </div>
            </div>

            <div
              className={"placeholder-1"}>
              <LazyLoadImage
                src={img2}
                width={"100%"}
                height={"100%"}
                effect="blur"
                alt={"img-2"} />
              
              <div
                className='column center-y center-x gap-10'>
                <img
                  className='icon'
                  alt='icon'
                  src={icon6} />

                <h6>
                  Investment projects
                </h6>

 
              </div>
            </div>

          </div>
        </section>

        <section
          className={"investment-projects"}>
          <div
            className={"row"}>
            <div
              className={"placeholder-1"}>
              <LazyLoadImage
                src={img17}
                width={"100%"}
                height={"100%"}
                effect="blur"
                alt={"img-17"} />
              

            </div>

            <div>

              <div
                className={"placeholder-1"}>
                <LazyLoadImage
                  src={img19}
                  width={"100%"}
                  height={"100%"}
                  effect="blur"
                  alt={"img-19"} />
              

              </div>


              <div>
                <div
                  className='column center-y center-x gap-10'>
                  <img
                    className='icon'
                    alt='icon'
                    src={icon6} />

                  <h6>
                    Investment projects
                  </h6>

                  <p
                    className='to-middle text-center text-white capitalize'>
                    MasBo is an architectural group working in 
                    <br /> the field of architecture and urban planning.
                  </p>
                </div>
              </div>

              <div
                className={"placeholder-2"}>
                <LazyLoadImage
                  src={img20}
                  width={"100%"}
                  height={"100%"}
                  effect="blur"
                  alt={"img-20"} />
              

              </div>

            </div>

            <div>
              <div
                className={"placeholder-1"}>
                <LazyLoadImage
                  src={img18}
                  width={"100%"}
                  height={"100%"}
                  effect="blur"
                  alt={"img-18"} />
              

              </div>
              
              <div
                className={"placeholder-2"}>
                <LazyLoadImage
                  src={img16}
                  width={"100%"}
                  height={"100%"}
                  effect="blur"
                  alt={"img-16"} />
              

              </div>
            </div>
          </div>
        </section>
      </div>

      {width && height && <ScrollIndicator />}
    </section>
  )
}
