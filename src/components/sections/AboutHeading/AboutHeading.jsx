import Socials from '@components/shared/Socials/Socials'
import './aboutHeading.scss'

export default function AboutHeading() {
  return (
    <section
      id="about-heading">
      <Socials />

      <div
        className='bg'>
        <div
          className="container">
          <div
            className="row center-y">
            <h1
              className="capitalize">
              Perfection is a modern  <br /> solution made with love

              <br /> for life.


            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
