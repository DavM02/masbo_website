import "./home.scss";
import arrow from "@assets/icons/arrow-down.svg";
import useAnimation from "@hooks/useAnimation";
import { getScrollBar } from "@components/Scroll/ScrollAccess";
export default function ScrollDown() {
    
  const {match} = useAnimation()
 
  return (
    <div
      className="center-flex">
      <div
        className="scroll-down center-gr"
        onClick={() => {
          if (match) {
            getScrollBar()?.scrollIntoView(
              document.getElementById('home-scroll'),
            );
          } else {
            document.getElementById('home-scroll')?.scrollIntoView({ behavior: "smooth", });
          }
        }}>
        <img
          className="icon"
          src={arrow}
          alt="arrow" />
      </div>
    </div>
  );
}
