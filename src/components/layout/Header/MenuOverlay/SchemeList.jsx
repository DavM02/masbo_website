import scheme1 from "@assets/icons/scheme-1.png";
import scheme2 from "@assets/icons/scheme-2.png";
import scheme3 from "@assets/icons/scheme-3.png";
import scheme4 from "@assets/icons/scheme-4.png";

const schemes = [
  { scheme: scheme1, title: "private houses" },
  { scheme: scheme2, title: "interiors" },
  { scheme: scheme3, title: <>commercial <br /> real estate</> },
  { scheme: scheme4, title: <>urban <br /> development</> },
];

export default function schemeList() {
  return (
    <ul
      className="schemes">
      {schemes.map(({ scheme, title }, index) => (
        <li
          key={index}
          className="column s-between">
          <img
            alt="scheme"
            src={scheme} />
              
          <h5
            className="static capitalize">{title}</h5>
        </li>
      ))}
    </ul>
  );
}
