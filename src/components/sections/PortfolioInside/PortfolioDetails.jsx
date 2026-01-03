export default function PortfolioDetails({ details }) {
  return (
    <div
      className="project-details row wrap">
      {Object.entries(details).map(([ key, value ]) => (
        <span
          key={key}
          className="fs-14 text-gray capitalize">
          <span
            className="font-bold text-black">
            {key}:&nbsp;&nbsp;&nbsp;
          </span>

          {value}
        </span>
      ))}
    </div>
  )
}


