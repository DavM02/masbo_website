 
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
            A Team That Builds  <br /> 
 
            Ideas with the 
            <br /> Future in Mind.


          </h1>
        </div>
      </div>
    </Intro>
  )
}
