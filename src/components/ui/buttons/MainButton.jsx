import arrowRight from "@assets/icons/arrow-right.svg"
export default function MainButton({...props}) {
  return (
    <div
      className='main-button'>
      <button
        className='font-bold text-white'
        {...props}>
        <div
          className='row gap-10 cetner-y'>
          {props.children}

          <img
            alt="arrow"
            className="icon"
            src={arrowRight} />
        </div>
      </button>
    </div> 
  )
}
