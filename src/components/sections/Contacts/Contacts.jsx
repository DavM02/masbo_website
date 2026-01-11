import './contacts.scss'
import SectionHeader from "@components/shared/SectionHeader/SectionHeader";

export default function Contacts() {
  return (
    <section
      id='contacts'>
      <div
        className='container'>
        
        <SectionHeader
          headline="contact"
          num={6} />

        <div
          className='row s-between wrap gap-20'>
          <div
            className='row center-y'>
            <p
              className='fs-14 text-gray capitalize'>
              <span
                className='font-bold'>
                Address:</span> Ukraine, Kyiv region, 08200 Irpen, Stelmakh street 9a, office 206
            </p>
          </div>

          <div
            className='row center-y'>
            <p
              className='fs-14 text-gray capitalize'>
              <span
                className='font-bold'>
                tel:</span> +3 (096) 029-81-18, 

              <br /> +3 (063) 023-81-18
            </p>  
          </div>

          <div
            className='row center-y'>
            <p
              className='fs-14 text-gray capitalize'>
              <span
                className='font-bold'>
                Email:</span> office@masbo.com.ua 
            
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
