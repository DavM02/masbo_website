import { Link } from "react-router-dom";
import useMediaQ from "@hooks/useMediaQ";
import { menuLinks } from "./Links";
 
export default function Menu() {

  const query = useMediaQ("(min-width: 920px)");

 
  return (query && <nav>
    <ul
      className="row">
      {menuLinks.map(([  path,name ]) => (
        <li
          key={path}>
          <Link
            to={path}
            className="text-white fs-14 capitalize">
            {name}
          </Link>
        </li>
      ))}
    </ul>


  </nav>)

}
