import Intro from '@components/shared/Intro/Intro'
import bg from "@assets/bg.jpg"
export default function AboutHeading() {
  return (
    <Intro
      bg={bg}
      id="about-heading">

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
    </Intro>
  )
}
