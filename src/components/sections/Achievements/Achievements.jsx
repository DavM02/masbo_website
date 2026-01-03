import './achievements.scss'
import bg from "@assets/bg-3.webp"
import Numbers from '@components/shared/Numbers/Numbers';
import ScrollParallaxImage from '@components/shared/ScrollParallaxImage/ScrollParallaxImage';
export default function Achievements() {
 
  return (
    <section
      id='achievements'>
      <div
       
        className='container'>
        <ScrollParallaxImage
          src={bg}
          wrapperClass='bg placeholder-3'
          height="150%" /> 

        <Numbers />
      </div>


    </section>
  )
}
