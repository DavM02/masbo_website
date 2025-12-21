import { useEffect, useState } from 'preact/hooks'
import Socials from '@components/shared/Socials/Socials'
import './Intro.scss'
          

export default function Intro({ id, bg, children}) {
  const [ show, setShow ] = useState(false)
    
  useEffect(() => {
    const img = new Image()
    img.src = bg
    img.onload = () => {
      setShow(true)
    }
  }, [])

  return (
    <section
      id={id}
      className='intro' >
      <Socials />

      <div
        className='bg'
        style={{ opacity: show ? '1' : '0', background: `url(${bg}) center no-repeat`}}>
 
        {children}
 
      </div>

    </section>
  )
}
