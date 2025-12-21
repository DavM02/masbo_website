import './reviews.scss'
import StarIcon from "@assets/icons/star.svg?react"
// import ReviewItem from './ReviewItem'
import { useRef, useState } from 'react'
import LeftArrow from "@assets/icons/arrow-left-black.svg?react"
import RightArrow from "@assets/icons/arrow-right-black.svg?react"
import { AnimatePresence, motion } from 'framer-motion'
import SmoothAppearance from '@ui/SmoothAppearance'
import useMediaQ from '@hooks/useMediaQ'
import img1 from "@assets/reviews/reviews-img-1.jpg"
import img2 from "@assets/reviews/reviews-img-2.jpg"
import img3 from "@assets/reviews/reviews-img-3.jpg"
import img4 from "@assets/reviews/reviews-img-4.jpg"
import img5 from "@assets/reviews/reviews-img-5.jpg"
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Reviews() {
  
  const [ slideId, setSlideId ] = useState(0)
  const [ initAnim, setInitAnim ] = useState(true)
  const direction = useRef(null)
  const [ isTransitioning, setIsTransitioning ] = useState(false)
  
  const middle = useMediaQ("(max-width: 720px)")
  const small = useMediaQ("(max-width: 420px)")
  const [ line, setLine ] = useState(false)
  
  const reviewsData = [
    {
      name: "Christina Arden",
      img: img2,
      position: "Art Director, Netflix",
      stars: 5,
      text: "We offer innovative engineering solutions that ensure the successful achievement of our clients' goals. Each project is approached individually, with detailed attention to design, functionality, and testing. Our team guarantees a reliable and efficient outcome, making sure every system meets expectations and works seamlessly."
    },
    {
      name: "James Thompson",
      img: img1,
      position: "Project Manager, Tesla",
      stars: 5,
      text: "The collaboration with this team exceeded our expectations. Their careful planning, consistent communication, and technical expertise helped us complete the project ahead of schedule. Each stage of development was handled professionally, resulting in a robust solution that is now being successfully implemented across multiple departments."
    },
    {
      name: "Olivia Martinez",
      img: img3,
      position: "Lead Designer, Adobe",
      stars: 5,
      text: "Working with them was a transformative experience for our company. The team focused on innovative solutions and meticulous execution, combining both creative and analytical skills. Every challenge was addressed proactively, and the final results demonstrated exceptional quality, efficiency, and attention to the smallest details in every aspect."
    },
    {
      name: "Michael Nguyen",
      img: img5,
      position: "CTO, Google",
      stars: 5,
      text: "Their approach to engineering and design is outstanding. Each solution is customized to client needs, combining technical expertise and strategic insight. The project management was seamless, timelines were respected, and communication was clear and consistent. The final deliverables were not only functional but exceeded all expectations."
    },
    {
      name: "Sophia Lee",
      img: img4,
      position: "Marketing Director, Amazon",
      stars: 5,
      text: "The team demonstrated strong expertise and a clear understanding of the task. All processes were well-organized, and decisions were made quickly and thoughtfully. Communication was clear at every stage, which helped avoid delays and misunderstandings. The final outcome fully met expectations and showed great attention to detail."
    }
  ];
 
   
  const dividedText = (txt) => {

    const maxLength = small ? 6 : middle ? 7 : 11;


    const result = [];
    const textArr = txt.split(" ");
    let line = [];

    textArr.forEach(word => {
      line.push(word);

      if (line.length === maxLength) {
        result.push(line.join(" "));
        line = [];
      }
    });

    if (line.length > 0) {
      result.push(line.join(" "));
    }

    return result;
  };

 
 
  return (
    <section
      id="reviews">
 
      <div
        className='container'>
        <div
          className="text-center">
          <h3
            className="text-gray">
            Connecting people around the world.
          </h3>

          <span
            className="fs-14 text-gray capitalize">What is our clients say about us</span>
        </div>

     
        <div
          className="reviews center-x center-y">
          <div
            className='nav-left'
            style={{ pointerEvents: !isTransitioning ? 'all' : 'none' }}>
            <LeftArrow
 
              onClick={() => {
                direction.current = "left"
                setIsTransitioning(true)
                setLine(true)
                setInitAnim(false)
              }} />
          </div>

          <ul>
            <AnimatePresence
              // initial={false}
              mode="wait">
              {
                <SmoothAppearance
                  onAnimationComplete={
                    (e) => {
                      if(  e.opacity == 1) {
                        setIsTransitioning(false)
                      }
                    }
                  }
                  key={slideId}
                  blur={true}
                  Tag={motion.li}
                  className="review-item column center-y gap-15">
                  <>
                    <div
                      className="review-image">
                      <LazyLoadImage
                        src={reviewsData[slideId].img}
                        width="100%"
                        height="100%"
                        effect="blur" />
                    </div>

                    <ul
                      className="stars row gap-5">
                      {Array.from({ length: reviewsData[slideId].stars }, (_, i) => (
                        <li
                          key={i}>
                          <StarIcon
                            width={12}
                            height={12} />
                        </li>
                      ))}
                    </ul>

                    <h5
                      className="text-black static">{reviewsData[slideId].name}</h5>

                    <span
                      className="fs-12 up-case text-black">{reviewsData[slideId].position}</span>
                  </>

                  <AnimatePresence
                    
                    mode='wait'>
                    {initAnim &&
                      <motion.p
          
                        className="text-black to-middle text-center font-bold capitalize"
                        initial="hidden"
                        animate="visible"
                        exit="exit"

                        onAnimationStart={(e) => 
                        {
                          if (e === "visible") {
                            setLine(false)
                          }
                        }
                        }
                 
                        onAnimationComplete={(e) => {


                         
                          if (e === "exit") {
                        
                            if (direction.current === "right") {
                          
                              setSlideId((prev) =>  prev+1 > reviewsData.length-1 ? 0 : prev+1)
                            } else {
                              setSlideId((prev) => prev - 1 < 0 ? reviewsData.length - 1 : prev - 1)
                    
                            }
                           
                            setInitAnim(true)
                            
                          }
                        }}
                        variants={{
                          hidden: {},
                          visible: { transition: { staggerChildren:  0.095   } },
                          exit: { transition: { staggerChildren:   0.045  , staggerDirection: -1  } }
                        }}>
                        {dividedText(reviewsData[slideId].text).map((line, i) => (
                          <motion.span
                            key={i}
                          
                            variants={{
                              hidden: { y: 20, opacity: 0 },
                              visible: { y: 0, opacity: 1 },
                              exit: { y: 20, opacity: 0 }
                            }}
                            transition={{ ease: "easeOut" }}>
                            {line}
                          </motion.span>
                        ))}
                      </motion.p>
                    }
                  </AnimatePresence>

                </SmoothAppearance>
              }
            </AnimatePresence>
          </ul>


          <div
            className='nav-right'
            style={{pointerEvents: !isTransitioning ? 'all' : 'none'}}>
            <RightArrow
 
              onClick={() => {
                direction.current = "right"
                setLine(true)
                setIsTransitioning(true)
                setInitAnim(false)
              }} />
          </div>
        </div>
         
        <div
          className='nav-count row gap-20 center-y center-x'>
          <div
            className='number'>
            <AnimatePresence
              mode="popLayout"
              initial={false}>
              <motion.span
                className="text-black fs-12"
                key={slideId}
                initial={{ y: direction.current === "right" ? 20 : -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: direction.current === "right" ? -20 : 20, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}>
                0{slideId + 1}
              </motion.span>
            </AnimatePresence>
          </div>

          <div
   
            style={{ transform:  !line ? "scaleX(-100%)" : "scaleX(100%)" }}
            className={`line ${line ? "start" : "static"}`}></div>

          <span
            className='fs-12 text-black'>0{reviewsData.length}</span>
    
        </div>
      </div>

    </section>
  )
}

