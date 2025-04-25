import { motion, AnimatePresence } from 'framer-motion'
import icon from '@assets/icons/plus.svg'

const animation = {
  initial: { height: 0, overflow: 'hidden' },
  animate: { height: 'auto' },
  exit: { height: 0 },
  transition: { duration: 1, ease: [ 0.645,
    0.045,
    0.355,
    1 ] }
}

export default function GoalItem({ text, isOpen, onClick }) {
  return (
    <li
      className="row s-between wrap"
      onClick={onClick}>
      <span
        className="fs-14 text-dark font-bold capitalize">{text}</span>

      <div
        className="display"
        style={{transform: isOpen ? 'rotate(360deg)' : 'none'}}>
        <img
          src={icon}
          alt="icon" />
      </div>

      <AnimatePresence
        mode="wait">
        {isOpen && (
          <motion.p
            className="static text-gray capitalize"
            {...animation}>
            We offer innovative engineering solutions that ensure the successful achievement of the client's goals.
            Because engineering is a result-oriented strategy in action. An individual approach and
            attention to detail in the development of engineering systems allows us to obtain reliable,
            verified solutions. Simply put, we think over the operation of facilities based on practical experience and scientific knowledge.
          </motion.p>
        )}
      </AnimatePresence>
    </li>
  )
}
