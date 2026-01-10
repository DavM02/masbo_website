import Intro from '@components/shared/Intro/Intro'
import bg from "@assets/bg-6.jpg"
export default function AboutHeading() {
  return (
    <Intro
      bg={bg}
      id="blog-heading">

      <div
        className="container">
        <div
          className="row center-y">
          <h1
            className="capitalize">
            blog


          </h1>
        </div>
      </div>
    </Intro>
  )
}
