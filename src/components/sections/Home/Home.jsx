import './home.scss'
import arrow from '@assets/icons/arrow-down.svg'
export default function Home() {
  return (
    <section
      id='home'>
      <div
        className="container">
        <div
          className='center-flex'>
          <div
            className='scroll-down center-gr'>
            <img
              className='icon'
              src={arrow}
              alt='arrow' />
          </div>
        </div>

        <div
          className='text-wrapper'>
          <div
            className='row gap-25'>
            <h1
              className='self-center-y capitalize'>
              from idea 
              <br /> to life
            </h1>

            <div
              className='line'></div>

            <p
              className='fs-14 self-center-y text-white capitalize'>
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
