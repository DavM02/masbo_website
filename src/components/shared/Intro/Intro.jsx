import { useEffect, useState } from 'preact/hooks'
import Socials from '@components/shared/Socials/Socials'
import './Intro.scss'
          

export default function Intro({ id, bg, children}) {
  const [ show, setShow ] = useState(false)
    
  useEffect(() => {
    if(!bg) return  
    const img = new Image()
    img.src = bg
    img.onload = () => {
      setShow(true)
    }
  }, [])

  return (
    <section
      id={id}
      className='intro placeholder-1' >
      <Socials />

      <div
        className='bg'
        style={{ opacity: bg ? (show ? '1' : '0') : '1', background: bg ? `url(${bg}) center no-repeat` : "transparent"}}>
 
        {children}
 
      </div>

    </section>
  )
}
