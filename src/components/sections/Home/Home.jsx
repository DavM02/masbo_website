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
              from idea
              <br /> to life
            </h1>

            <p
              className="to-small text-white capitalize">
              Arhitecture modern technology
              <br /> MasBo is an architectural group working in the field of
              architecture and

              <br /> urban planning. For our customers, we are known as a
              reliable partner

              <br /> with high standards of quality and responsibility.
            </p>
          </div>
        </div>
      </div>
    </Intro>
  );
}
