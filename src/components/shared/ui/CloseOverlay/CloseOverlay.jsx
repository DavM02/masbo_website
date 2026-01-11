import './closeOverlay.scss'
export default function CLoseOverlay(props) {
  return (
    <div
      onClick={props.onClick}
      className="close-overlay">
      <div
        className="close-overlay-wrapper">
        <div></div>

        <div></div>
      </div>
    </div>
  )
}
