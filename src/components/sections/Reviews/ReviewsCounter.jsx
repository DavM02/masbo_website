import { AnimatePresence, motion } from 'framer-motion'

export default function ReviewsCounter({ slideId, total, line, direction }) {
  return (
    <div
      className="nav-count row gap-20 center-y center-x">
      <div
        className="number">
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
        className={`line ${line ? "start" : "static"}`}
        style={{ transform: !line ? "scaleX(-100%)" : "scaleX(100%)" }} />

      <span
        className="fs-12 text-black">0{total}</span>
    </div>
  )
}
