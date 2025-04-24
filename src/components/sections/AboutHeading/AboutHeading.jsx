import Socials from '@components/shared/Socials/Socials'
import './aboutHeading.scss'

export default function AboutHeading() {
  return (
    <section
      id="about-heading">
      <Socials />

      <div
        className="container">
        <div
          className="row center-y">
          <h1
            className="capitalize">
            Perfect is when <br />

            a Modern solution with <br />
          
            love to life
          </h1>
        </div>
      </div>
    </section>
  )
}
