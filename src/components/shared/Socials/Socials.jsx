import './socials.scss'
import { socialLinks } from './SocialLinks';
import useAnimation from "@hooks/useAnimation";

export default function Socials() {

  const { width } = useAnimation();


  return (
    
    width && <ul
      className="socials column center-x gap-40">
      {socialLinks.map((el, i) => (
        <li
          key={i}><a
            href="#"
            aria-label={el.label}>
            <el.icon />
          </a></li>
      ))}
    </ul>

  );
}
