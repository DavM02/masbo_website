import './modal.scss'
import SmoothAppearance from '../SmoothAppearance'
export default function Modal({children}) {
  return (
    <SmoothAppearance
      blur={"true"}
      className='modal'> 
      {children}
    </SmoothAppearance>
  )
}
