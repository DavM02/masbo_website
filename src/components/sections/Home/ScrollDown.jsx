import "./home.scss";
import arrow from "@assets/icons/arrow-down.svg";
import useAnimation from "@hooks/useAnimation";
export default function ScrollDown() {
    
  const {scrollTo} = useAnimation()


  return (
    <div
      className="center-flex">
      <div
        className="scroll-down center-gr"
        onClick={() => {
          scrollTo('home-scroll',)
        }}>
        <img
          className="icon"
          src={arrow}
          alt="arrow" />
      </div>
    </div>
  );
}
