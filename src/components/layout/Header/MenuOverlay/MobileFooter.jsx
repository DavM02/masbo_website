
import MobileSocials from "@components/shared/MobileSocials/MobileSocials";
import HotLinks from "./HotLinks";
export default function MobileFooter() {
  return (
    <div
      
      className='mobile-footer'>
            
      <div
              
        className='lang row center-x end-y gap-10'>
        <span
          className='fs-14 text-white font-bold up-case'>
          eng
        </span>

        <div
          className='line'></div>
              
        <span
          className='fs-14 text-white font-bold up-case'>
          ukr
        </span>
      </div>

      <HotLinks />

      <div
        className='row s-between gap-20'>
              
        <p
              
          className='to-small text-white capitalize'>
          <span
            className='font-bold'> Address: </span> Ukraine, Kyiv region, 08200 Irpen,

          <br /> Stelmakh street 9a, office 206
        </p>

        <p
            
          className='to-small text-white capitalize'>
          <span
            className='font-bold'>
            Tel:
          </span> +3 (096) 029-81-18, +3 (063) 023-81-18

          <br />

          <span
            className='font-bold'>
            Email:
          </span> office@masbo.com.ua 
        </p>


      </div>

      <MobileSocials />
    </div>
  )
}
