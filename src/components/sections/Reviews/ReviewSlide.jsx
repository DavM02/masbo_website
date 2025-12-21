import StarIcon from "@assets/icons/star.svg?react"
import { AnimatePresence, motion } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function ReviewSlide({
  review,
  dividedText,
  initAnim,
  setInitAnim,
  setSlideId,
  setLine,
  direction,
  reviewsLength
}) {
  return (
    <>
      <div
        className="review-image">
        <LazyLoadImage
          src={review.img}
          width="100%"
          height="100%"
          effect="blur" />
      </div>

      <ul
        className="stars row gap-5">
        {Array.from({ length: review.stars }, (_, i) => (
          <li
            key={i}>
            <StarIcon
              width={12}
              height={12} />
          </li>
        ))}
      </ul>

      <h5
        className="text-black static">{review.name}</h5>

      <span
        className="fs-12 up-case text-black">{review.position}</span>

      <AnimatePresence
        mode="wait">
        {initAnim && (
          <motion.p
            className="text-black to-middle text-center font-bold capitalize"
            initial="hidden"
            animate="visible"
            exit="exit"
            onAnimationStart={(e) => {
              if (e === "visible") setLine(false)
            }}
            onAnimationComplete={(e) => {
              if (e === "exit") {
                if (direction.current === "right") {
                  setSlideId(prev => prev + 1 > reviewsLength - 1 ? 0 : prev + 1)
                } else {
                  setSlideId(prev => prev - 1 < 0 ? reviewsLength - 1 : prev - 1)
                }
                setInitAnim(true)
              }
            }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.095 } },
              exit: { transition: { staggerChildren: 0.045, staggerDirection: -1 } }
            }}>
            {dividedText(review.text).map((line, i) => (
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
        )}
      </AnimatePresence>
    </>
  )
}
