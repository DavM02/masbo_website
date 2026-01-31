import { LazyLoadImage } from 'react-lazy-load-image-component'
import tick from "@assets/tick.svg";
export default function PortfolioDescription({ description }) {
  const {
    goal,
    paragraphs,
    image,
    problems,
  } = description
 
  return (
    <div
      className="project-description">
      <div
        className="column gap-25">
        <h5
          className="text-black capitalize">
          Goal: {goal}
        </h5>

        {paragraphs.map((text, i) => (
          <p
            key={i}
            className="to-middle text-gray capitalize">
            {text}
          </p>
        ))}
      </div>

      <div
        className="row wrap gap-80">
        <div
          className="placeholder-1">
          <LazyLoadImage
            src={`${import.meta.env.BASE_URL}${image}`}
            width="100%"
            height="100%"
            effect="opacity"
            alt={goal} />
        </div>

        <div
          className="problem-solving">
          <h5
            className="text-black capitalize">
            Problem solving:
          </h5>

          <ul
            className="column gap-35">
            {problems.map((item, i) => (
              <li
                key={i}
                className="row gap-10">
                <img
                  src={tick}
                  alt="tick" />
              

                <p
                  className="to-middle text-black capitalize">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
