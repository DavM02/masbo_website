import MainButton from "@ui/buttons/MainButton";
import SplitAnimation from "./SplitAnimation";
import { useNavigate } from "react-router-dom";
export default function Team() {

  const navigate = useNavigate()
  
  return (
    <section
      className="team">
      <div
        className="container full-height">
        <div
          className="column center-y center-x gap-25 full-height">
          <span
            className="fs-14 text-white text-center up-case">
            confidently to bring idea to life.
          </span>

          <SplitAnimation />

          <p
            className="to-middle text-white text-center capitalize">
            MasBo is an architectural studio specializing in urban planning and contemporary design. We are trusted by clients for our precision, responsibility, and consistently high standards, bringing complex ideas to life through a clear process and thoughtful execution.
          </p>

          <MainButton
            onClick={() => {
              navigate('/contact')
            }}
            arrow={true}>Let’s work together</MainButton>
        </div>
      </div>
    </section>
  );
}
