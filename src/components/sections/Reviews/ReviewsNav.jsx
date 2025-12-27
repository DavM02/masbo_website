import LeftArrow from "@assets/icons/arrow-right.svg?react"
import RightArrow from "@assets/icons/arrow-right.svg?react"

export default function ReviewsNav({ side, onClick, disabled }) {
  const Arrow = side === 'left' ? LeftArrow : RightArrow

  return (
    <div
      className={`nav-${side}`}
      style={{ pointerEvents: !disabled ? 'all' : 'none' }}>
      <Arrow
        onClick={onClick} />
    </div>
  )
}
