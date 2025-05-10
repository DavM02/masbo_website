import { gsap } from 'gsap';
import useAnimation from '@hooks/useAnimation'
import './numbers.css'
const numbers = [
  { num: 123, title: "successful projects" },
  { num: 1235, title: "people who work with us" },
  { num: 23, title: "urban planning projects" },
  {num: 1012, title: "Modern interiors "}
]

export default function Numbers({trigger}) {

  useAnimation((options) => {
    const numItems = gsap.utils.toArray(".numbers li h2")
    numItems.forEach((counter, i) => {

      gsap.to(counter, {
        innerText: numbers[i].num,
        duration: 2,
        ease: "power1.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger,
          start: "top 20%",
          toggleActions: "play none none none",
          scroller: options.scroller,
        },
              
      });
    });
           
 
  })
  
  return (
    <ul
      className={"numbers row s-between wrap gap-40"} >
      {numbers.map((el, i) => {
        return (
          <li
            key={i}>
            <h2>
              0 
            </h2>

            <span
              className='fs-14 text-white capitalize'>
              {el.title}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
