import { LazyLoadImage } from "react-lazy-load-image-component"
export default function ProjectItem({el}) {
  return (
    <li>
      <div
        className='placeholder-1'>
        <LazyLoadImage
          src={el.img}
          width={"100%"}
          height={"127px"}
          effect="blur"
          alt={'project-image'} />
      </div>

      <span
        className='up-case font-reg text-white'>
        {el.date}
      </span>

      <h5>{el.title}</h5>

      <p
        className='to-middle text-white capitalize'>
        {el.description}
      </p>
    </li> 
  )
}
