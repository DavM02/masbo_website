import { extraLinks } from "../LinksConfig"
import { NavLink } from "react-router-dom"
export default function ExtraLinks({closeTl}) {
  return (
    <div
          
      className='column s-between'>
      <ul
   
        className='column gap-20'>
        {extraLinks.map(([ path, label ], i) => (
          <li
            onClick={(i === 0 || i === 2 || i===4) ? () => {closeTl.current.restart()} : undefined}
            key={path}>
            <NavLink
              end
              to={path}>{label}
            </NavLink></li>
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
