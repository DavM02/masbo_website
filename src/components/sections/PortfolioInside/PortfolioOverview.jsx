export default function PortfolioOverview({ title, intro }) {
  return (
    <div
      className="project-overview">
      <h3
        className="text-gray capitalize">{title}</h3>

      <p
        className="font-bold to-middle text-gray capitalize">
        {intro}
      </p>
    </div>
  )
}
