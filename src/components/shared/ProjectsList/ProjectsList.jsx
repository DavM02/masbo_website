import img2 from "@assets/img-2.jpg"
import img11 from "@assets/img-11.jpg"
import img12 from "@assets/img-12.jpg"
import ProjectItem from "./ProjectItem";
import './projectsList.scss'

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

export default function ProjectsList() {


  return (
    <ul
      className="projects-list row gap-85">
      {data.map((el, i) => (
        <ProjectItem
          el={el}
          key={i} />
      ))}
    </ul>
  );

}
