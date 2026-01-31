import scheme1 from "@assets/icons/scheme-1.png";
import scheme2 from "@assets/icons/scheme-2.png";
import scheme3 from "@assets/icons/scheme-3.png";
import scheme4 from "@assets/icons/scheme-4.png";
import { Link } from "react-router-dom";

const schemes = [
  { scheme: scheme1, title: "private houses", tag: "private houses" },
  { scheme: scheme2, title: "interiors", tag: "interiors" },
  { scheme: scheme3, title: <>commercial <br /> real estate</>, tag: "commercial real estate" },
  { scheme: scheme4, title: <>urban <br /> development</>, tag: "urban development" },
];

export default function schemeList({onClick}) {
  return (
    <ul
      className="schemes">
      {schemes.map(({ scheme, title, tag }, index) => (
        <li
          key={index}
          className="column s-between">
          <img
            alt="scheme"
            src={scheme} />
              
          <Link
            onClick={onClick}
            to={`/portfolio?tag=${tag}`}>
            <h5
              className="static capitalize">{title}</h5></Link>
        </li>
      ))}
    </ul>
  );
}
