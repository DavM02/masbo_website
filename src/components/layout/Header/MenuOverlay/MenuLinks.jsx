import { menuLinks } from "./Links"
import { Link } from "react-router-dom"
export default function MenuLinks({isMobile}) {
  return (
    <div
      className='column s-between'>
          
      <ul
   
        className='column gap-20'>
        {menuLinks.map(([ path, label ]) => (
          <li
            key={path}><Link
              to={path}>{label}</Link></li>
        ))}
      </ul>

      {!isMobile &&       <p
           
        className='to-middle text-white capitalize'>
        <span
          className='font-bold'> Address: </span> Ukraine, Kyiv region, 08200 Irpen,

        <br /> Stelmakh street 9a, office 206
      </p>}




    </div>
  )
}
