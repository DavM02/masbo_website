 
import Intro from '@components/shared/Intro/Intro'
import bg from "@assets/bg-4.jpg"

export default function ServicesHeading() {
  return (
    <Intro
      bg={bg}
      id="services-heading">

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
