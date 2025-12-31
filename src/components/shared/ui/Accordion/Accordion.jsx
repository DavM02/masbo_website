import { motion, AnimatePresence } from 'framer-motion'
import icon from '@assets/icons/plus.svg'
import './accordion.scss'
const animation = {
  initial: { height: 0, overflow: 'hidden' },
  animate: { height: 'auto' },
  exit: { height: 0 },
  transition: { duration: 1, ease: [ 0.645,
    0.045,
    0.355,
    1 ] }
}

export default function Accordion({ heading, text, isOpen, onClick }) {
  return (
    <li
      className="accordion row s-between wrap"
      onClick={onClick}>
      <span
        className="fs-14 font-bold text-black capitalize">{heading}</span>

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
            className="static heading-gray capitalize"
            {...animation}>
            {text}
          </motion.p>
        )}
      </AnimatePresence>
    </li>
  )
}
