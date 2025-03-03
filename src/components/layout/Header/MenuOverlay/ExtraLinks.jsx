import { extraLinks } from "../Links"
import { Link } from "react-router-dom"
export default function ExtraLinks() {
  return (
    <div
          
      className='column s-between'>
      <ul
   
        className='column gap-20'>
        {extraLinks.map(([ path, label ]) => (
          <li
            key={path}><Link
              to={path}>{label}</Link></li>
        ))}
      </ul>

      <p
            
        className='to-middle text-white capitalize'>
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
  )
}
