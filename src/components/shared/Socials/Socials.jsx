import Instagram from "@assets/icons/instagram.svg?react";
import Facebook from "@assets/icons/facebook.svg?react";
import Twitter from "@assets/icons/twitter.svg?react";
import Telegram from "@assets/icons/telegram.svg?react";
import Youtube from "@assets/icons/youtube.svg?react";
import './socials.scss'
import useAnimation from "@hooks/useAnimation";

export default function Socials() {

  const { width, height } = useAnimation();

  const socials = [
    {
      name: "facebook",
      icon: <Facebook />,
    },
    {
      name: "instagram",
      icon: <Instagram />,
    },
    {
      name: "twitter",
      icon: <Twitter />,
    },
    {
      name: "youtube",
      icon: <Youtube />,
    },
    {
      name: "telegram",
      icon: <Telegram />,
    },
  ];

  return (
    
    width && height && <ul
      className="socials column center-x gap-40">
      {socials.map((el, i) => (
        <li
          key={i}>{el.icon}</li>
      ))}
    </ul>

  );
}
