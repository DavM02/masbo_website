import LeftArrow from "@assets/icons/arrow-left-black.svg"
import RightArrow from "@assets/icons/arrow-right-black.svg"

export default function ReviewsNav({ side, onClick, disabled }) {
  const Arrow = side === 'left' ? LeftArrow : RightArrow

  return (
    <div
      className={`nav-${side}`}
      onClick={onClick}
      style={{ pointerEvents: !disabled ? 'all' : 'none' }}>
      <img
        src={Arrow} />
    </div>
  )
}
