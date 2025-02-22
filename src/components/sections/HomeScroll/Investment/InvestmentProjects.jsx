import img16 from "@assets/img-16.jpg";
import img17 from "@assets/img-17.jpg";
import img18 from "@assets/img-18.jpg";
import img19 from "@assets/img-19.jpg";
import img20 from "@assets/img-20.jpg";
import icon6 from "@assets/icons/icon-6.svg"
import ImageBlock from "../ImageBlock";
import InfoBlock from "../InfoBlock";
import './investment.scss'
export default function InvestmentProjects() {
  return (
    <section
      className="investment-projects">
      <div
        className="row full-height">
        <div
          className="section-block">
          <ImageBlock
            src={img17}
            alt="img-17"
            className="placeholder-1 full-height" />
        </div>


        <div
          className="section-block">
          <ImageBlock
            src={img19}
            alt="img-19"
            className="placeholder-1" />

          <InfoBlock
            icon={icon6}
            title={"Investment projects"}
            text={"MasBo is an architectural group working in <br/> the field of architecture and urban planning."} />

          <ImageBlock
            src={img20}
            alt="img-20"
            className="placeholder-2" />
        </div>

        <div
          className="section-block">
          <ImageBlock
            src={img18}
            alt="img-18"
            className="placeholder-1" />

          <ImageBlock
            src={img16}
            alt="img-16"
            className="placeholder-2" />
        </div>
      </div>
    </section>
  );
}
