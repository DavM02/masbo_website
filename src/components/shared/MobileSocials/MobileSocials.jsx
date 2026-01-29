import { socialLinks } from "../Socials/SocialLinks"
export default function MobileSocials() {


  return (
    <ul
      className='mobile-socials gap-15 s-between'>
      {
        socialLinks.map((el, i) => {
          return (<li
            key={i}>
            <a
              href='#'
              aria-label={el.label}
              className='center-gr'>
              <el.icon /> 
            </a>
          </li>)
        })
      }
    </ul>
  )
}
