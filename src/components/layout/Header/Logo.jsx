import { Link } from "react-router-dom"

import logo from "@assets/icons/MASBO_Logo 2.svg";
export default function Logo() {
  return (
    <Link
      className="logo"
      to={"/"}>
      <img
        className="icon"
        src={logo}
        alt="logo" />
    </Link>
  )
}
