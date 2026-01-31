import "./home.scss";
import Intro from "@components/shared/Intro/Intro"; 
import ScrollDown from "./ScrollDown";
import bg from "@assets/bg.avif"
export default function Home() {


  return (
    <Intro
      bg={bg}
      id="home">
      <div
        className="container">
        <ScrollDown />

        <div
          className="text-wrapper">
          <div
            className="row center-y gap-50">
            <h1
              className="capitalize">
             From Vision 
              <br /> to Form
            </h1>

            <p
              className="to-small text-white capitalize">
              Architecture shaped by technology and purpose.
              <br />  MasBo is an architectural studio specializing in urban planning and contemporary design.
              We are trusted by clients for our precision, responsibility, and consistently high standards, bringing complex ideas to life through a clear process and thoughtful execution.
            </p>
          </div>
        </div>
      </div>
    </Intro>
  );
}
