import './reviews.scss'
import { useRef, useState } from 'preact/hooks'
import { AnimatePresence, motion } from 'framer-motion'

import useMediaQ from '@hooks/useMediaQ'
import SmoothAppearance from '@ui/SmoothAppearance'

import ReviewsNav from './ReviewsNav'
import ReviewSlide from './ReviewSlide'
import ReviewsCounter from './ReviewsCounter'

import reviewsData from './reviewsData'

export default function Reviews() {
  const [ slideId, setSlideId ] = useState(0)
  const [ initAnim, setInitAnim ] = useState(true)
  const [ isTransitioning, setIsTransitioning ] = useState(false)
  const [ line, setLine ] = useState(false)

  const direction = useRef(null)

  const middle = useMediaQ("(max-width: 720px)")
  const small = useMediaQ("(max-width: 420px)")


  const dividedText = (txt) => {
    const maxLength = small ? 6 : middle ? 7 : 11
    const result = []
    const textArr = txt.split(" ")
    let line = []

    textArr.forEach(word => {
      line.push(word)
      if (line.length === maxLength) {
        result.push(line.join(" "))
        line = []
      }
    })

    if (line.length > 0) result.push(line.join(" "))
    return result
  }

  return (
    <section
      id="reviews">
      <div
        className="container">
        <div
          className="text-center">
          <h3
            className="text-gray">Connecting people around the world</h3>

          <span
            className="fs-14 text-gray capitalize">
            What Clients Think About Us
          </span>
        </div>

        <div
          className="reviews center-x center-y">
          <ReviewsNav
            side="left"
            disabled={isTransitioning}
            onClick={() => {
              direction.current = "left"
              setIsTransitioning(true)
              setLine(true)
              setInitAnim(false)
            }} />

          <ul>
            <AnimatePresence
              mode="wait">
              <SmoothAppearance
                key={slideId}
                blur={true}
                Tag={motion.li}
                className="review-item column center-y gap-15"
                onAnimationComplete={(e) => {
                  if (e.opacity === 1) setIsTransitioning(false)
                }}>
                <ReviewSlide
                  review={reviewsData[slideId]}
                  dividedText={dividedText}
                  initAnim={initAnim}
                  setInitAnim={setInitAnim}
                  setSlideId={setSlideId}
                  setLine={setLine}
                  direction={direction}
                  reviewsLength={reviewsData.length} />
              </SmoothAppearance>
            </AnimatePresence>
          </ul>

          <ReviewsNav
            side="right"
            disabled={isTransitioning}
            onClick={() => {
              direction.current = "right"
              setLine(true)
              setIsTransitioning(true)
              setInitAnim(false)
            }} />
        </div>

        <ReviewsCounter
          slideId={slideId}
          total={reviewsData.length}
          line={line}
          direction={direction} />
      </div>
    </section>
  )
}
