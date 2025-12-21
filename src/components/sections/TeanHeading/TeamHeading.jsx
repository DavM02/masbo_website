 
import Intro from '@components/shared/Intro/Intro'
import bg from "@assets/bg-5.jpg"

export default function TeamHeading() {
  return (
    <Intro
      bg={bg}
      id="team-heading">

      <div
        className="container">
        <div
          className="row center-y">
          <h1
            className="capitalize">
            The team that Builds  <br /> 
            Ideas Driven by the 

            <br /> Future.


          </h1>
        </div>
      </div>
    </Intro>
  )
}
