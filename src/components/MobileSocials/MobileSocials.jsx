import Instagram from "@assets/icons/instagram.svg?react";
import Facebook from "@assets/icons/facebook.svg?react";
import Twitter from "@assets/icons/twitter.svg?react";
import Telegram from "@assets/icons/telegram.svg?react";
import Youtube from "@assets/icons/youtube.svg?react";

export default function MobileSocials() {

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
    <ul
      className='mobile-socials gap-15 s-between'>
      {
        socials.map((el, i) => {
          <li
            key={i}>
            <a
              href='#'
              className='center-gr'>
              {el.icon}    
            </a>
          </li>
        })
      }
    </ul>
  )
}
