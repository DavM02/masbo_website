import { Link } from "react-router-dom";

export const LinksList = ({ items }) => (
  <ul>
    {items.map(({ to, label }) => (
      <li
        key={to}>
        <Link
          to={to}>{label}</Link>
      </li>
    ))}
  </ul>
);
