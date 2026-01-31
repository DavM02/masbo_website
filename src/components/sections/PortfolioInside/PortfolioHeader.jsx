import { Link } from 'react-router-dom'

export default function PortfolioHeader({ id }) {
  return (
    <div
      className="section-header row s-between">
      <div
        className="row wrap gap-20">
        <Link
          to="/">
          <span
            className="fs-14 text-black up-case">back home</span>
        </Link>

        <Link
          to="/portfolio">
          <span
            className="fs-14 text-black up-case">portfolio</span>
        </Link>

        <span
          className="fs-14 text-black up-case">
          portfolio inside
        </span>
      </div>

      <span
        className="fs-14 text-black up-case">{parseInt(id) > 9 ? id : "0"+ id}</span>
    </div>
  )
}


