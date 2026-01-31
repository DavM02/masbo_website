import { useState } from "preact/hooks"
import Portal from "@ui/Portal"
import Overlay from "@ui/Overlay/Overlay"
import { getScrollBar } from "@components/Scroll/ScrollAccess"
import Modal from "@ui/Modal/Modal"
import Form from "@ui/Form/Form"
import CLoseOverlay from "@ui/CloseOverlay/CloseOverlay"
export default function OrderProject() {

  const [ show, setShow ] = useState(false)
    
  function handleModal() {
    setShow(prev => {
      const next = !prev;

      if (next) {
        getScrollBar()?.updatePluginOptions("overflow", { open: true });  
        document.body.style.overflow = "hidden"
      } else {
        getScrollBar()?.updatePluginOptions("overflow", { open: false });  
        document.body.style.overflow = "initial"
      }

      return next;
    });
  }

  return (
    <>
      <div
        onClick={() => handleModal()}

        className="order-project">
        <span
          className="fs-14 text-white capitalize">Order the project</span>
      </div>

      <Portal
        value={show}>
        <Overlay />
      </Portal>

      <Portal
        value={show}>
        <Modal>
          <Form /> 

          <CLoseOverlay
            onClick={() => handleModal()} />
        </Modal>
      </Portal>
    </>
  )
}
