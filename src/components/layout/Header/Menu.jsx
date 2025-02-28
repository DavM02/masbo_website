import { Link } from "react-router-dom";
import useMediaQ from "@hooks/useMediaQ";
 

export default function Menu() {
  const navLinks = [
    { name: "About us", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Team", path: "/team" },
    { name: "Services", path: "/services" },
    { name: "News", path: "/news" },
    { name: "Contacts", path: "/contacts" }
  ];
    
  const query = useMediaQ("(min-width: 920px)");

  return (query && <nav>
    <ul
      className="row">
      {navLinks.map(({ name, path }) => (
        <li
          key={path}>
          <Link
            href={path}
            className="text-white fs-14 capitalize">
            {name}
          </Link>
        </li>
      ))}
    </ul>


  </nav>)

}
