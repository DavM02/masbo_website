import { Link } from "react-router-dom"

import logo from "@assets/icons/MASBO_Logo 2.svg";
export default function Logo({...props}) {
  return (
    <Link
      {...props}
      className="logo"
      to={"/"}>
      <img
        className="icon"
        src={logo}
        alt="logo" />
    </Link>
  )
}
