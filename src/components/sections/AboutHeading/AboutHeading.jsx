import Intro from '@components/shared/Intro/Intro'
import bg from "@assets/bg-2.jpg"
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
           Modern Solutions  <br /> Made with Care 

          </h1>
        </div>
      </div>
    </Intro>
  )
}
