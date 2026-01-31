import Intro from '@components/shared/Intro/Intro'
import bg from "@assets/bg-7.jpg"
export default function ContactiHeasing() {
  return (
    <Intro
      bg={bg}
      id="contacts-heading">

      <div
        className="container">
        <div
          className="row center-y">
          <h1
            className="capitalize">
             Find us

          </h1>
        </div>
      </div>
    </Intro>
  )
}
