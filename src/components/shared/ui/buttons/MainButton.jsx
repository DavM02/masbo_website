import arrowRight from "@assets/icons/arrow-right.svg"
export default function MainButton({arrow = true, ...props}) {
  return (
    <div
      className='main-button'>
      <button
        className='font-bold text-white'
        {...props}>
        <div
          className='row gap-10 center-y'>
          {props.children}

          {arrow && <img
            alt="arrow"
            className="icon"
            src={arrowRight} />}

        </div>
      </button>
    </div> 
  )
}
