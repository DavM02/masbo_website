import img2 from "@assets/img-2.jpg"
import img11 from "@assets/img-11.jpg"
import img12 from "@assets/img-12.jpg"
import { gsap } from 'gsap';
import useAnimation from '@hooks/useAnimation'
import ProjectItem from "./ProjectItem";

const data = [
  {
    img: img2,
    title: "How the industrial zone turned into a colorful microdistrict",
    date: "25 september ", description: "We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action."
  },
  {
    img: img11,
    title: "How the industrial zone turned into a colorful microdistrict",
    date: "25 september ", description: "We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action."
  },
  {
    img: img12,
    title: "How the industrial zone turned into a colorful microdistrict",
    date: "25 september ", description: "We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action."
  }
]

export default function Projects() {


  useAnimation((options) => {

    const data = gsap.utils.toArray(".projects-list .placeholder-1")

    gsap.set(data, {
      clipPath: "inset(0 100% 0 0)"
    });
  
    gsap.to(data, {
      ease: "none",
      clipPath: "inset(0)",  
      scrollTrigger: {
        trigger: ".projects-list",
        start: "left 30%",
        toggleActions: "play none none none",
        ...options,
      }
    });
 
  })
 

  return (
    <ul
      className="data row gap-85">
      {data.map((el, i) => (
        <ProjectItem
          el={el}
          key={i} />
      ))}
    </ul>
  );

}
