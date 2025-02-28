import { extraLinks } from "./Links"
import { Link } from "react-router-dom"
export default function HotLinks() {
  return (
    <>
      <h5
           
        className='static capitalize'>
        hot links:
      </h5>

      <ul
        className='hot-links row wrap gap-10'>
        {extraLinks.map(([ path, label ]) => (
          <li
            className='center-gr'
            key={path}><Link
              to={path}>{label}</Link></li>
        ))}
      </ul>
    </>
  )
}
