import Numbers from "./Numbers"
import useAnimation from '@hooks/useAnimation'
import play from "@assets/icons/play.svg"
import Socials from "../Socials"
import './about.scss'
export default function About() {

  const { width, height } = useAnimation()
  return (
    <section
      className="about">
      <div
        className='container column end-x'>
        <div
          className='row center-y'>
          <div
            className='text-wrapper  center-y row gap-50'>
                    
            <h1
              className='capitalize'>
              from idea 
              <br /> to life
            </h1>
      
      
            <p
              className='to-small text-white capitalize'>
              Arhitecture modern technology
              <br /> MasBo is an architectural group working in the field of
      
              <br /> architecture and urban planning. For our customers, we are known 
      
              <br />as a reliable partner with high standards of quality and 
      
              <br /> responsibility.
            </p>
          </div>
      
          <div
            className='play self-center-y center-gr'>
            <img
              className='icon'
              src={play}
              alt='arrow' />
          </div>
        </div>
      
        <Numbers />
                
        {width && height && <Socials />}
      </div>
    </section>
  )
}
