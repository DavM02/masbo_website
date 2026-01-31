import { menuLinks } from "../LinksConfig"
import {  NavLink } from "react-router-dom"
export default function MenuLinks({isMobile, onClick}) {
  return (
    <div
      className='column s-between'>
          
      <ul
        className='column gap-20'>
        {menuLinks.map(([ path, label ]) => (
          <li
            key={path}>
            <NavLink
              end
              onClick={onClick}
              to={path}>{label}</NavLink></li>
        ))}
      </ul>

      {!isMobile &&
        <p
          className='to-middle text-white capitalize'>
          <span
            className='font-bold'> Address: </span> Ukraine, Kyiv region, 08200 Irpen,

          <br /> Stelmakh street 9a, office 206
        </p>}

    </div>
  )
}
