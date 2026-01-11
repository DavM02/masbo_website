import { createPortal } from "preact/compat"
import { AnimatePresence } from "framer-motion"
 

export default function Portal({ value, ...props }) {
 

  return (
    <AnimatePresence
          
      mode="wait">
      {value && <>
        {
          createPortal(props.children, document.getElementById('modal-root'))
        }
      </>}
    </AnimatePresence>
  )
}