import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"
export default function ProjectItem({el}) {
  return (
    <li>
      <Link
        to={`/news/blog-${el.id}`}>
        <div
          className='placeholder-1'>
          <LazyLoadImage
            src={`${import.meta.env.BASE_URL}${el.image}`}
            width={"100%"}
            height={"127px"}
            effect="opacity"
            alt={'project-image'} />
        </div>

        <span
          className='fs-12 up-case'>
          {el.date}
        </span>

        <h5>{el.title}</h5>

        <p
          className='to-middle capitalize'>
          {el.text}...
        </p></Link>
    </li> 
  )
}
