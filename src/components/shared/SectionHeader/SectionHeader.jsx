import './sectionHeader.scss'
export default function SectionHeader({headline, num}) {
  return (
    <div
      className="section-header row s-between">
      <span
        className="fs-14 text-black up-case">{headline}</span>

      <span
        className="fs-14 text-black up-case">0{num}</span>
    </div>
  )
}
