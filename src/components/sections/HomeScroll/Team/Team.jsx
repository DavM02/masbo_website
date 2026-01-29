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
            MasBo is an architectural group working in the field of architecture
            and urban planning. The company was founded in 2006. We offer a full
            range of services from interior design, individual cottages to the
            design and construction of residential complexes.
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
