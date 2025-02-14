import './home.scss'
import arrow from '@assets/icons/arrow-down.svg'
import { useContext } from 'preact/hooks'
import { MainContext } from "@context/MainContext";
export default function Home() {
  const {scrollbarAccess} = useContext(MainContext)
  return (
    <section
      id='home'>

      <div
        className="container">
        <div
          className='center-flex'>
          <div
            className='scroll-down center-gr'
            onClick={() => {
              scrollbarAccess.current.scrollIntoView(document.getElementById("home-scroll"))
            }}>
            <img
              className='icon'
              src={arrow}
              alt='arrow' />
          </div>
        </div>

        <div
          className='text-wrapper'>
          <div
            className='row center-y gap-50'>
            <h1
              className='capitalize'>
              from idea 
              <br /> to life
            </h1>


            <p
              className='to-small text-white capitalize'>
              Arhitecture modern technology
              <br /> MasBo is an architectural group working in the field of architecture and

              <br /> urban planning. For our customers, we are known as a reliable partner

              <br /> with high standards of quality and responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
