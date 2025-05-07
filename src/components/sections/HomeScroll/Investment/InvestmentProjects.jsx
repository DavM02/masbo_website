import img16 from "@assets/img-16.jpg";
import img17 from "@assets/img-17.jpg";
import img18 from "@assets/img-18.jpg";
import img19 from "@assets/img-19.jpg";
import img20 from "@assets/img-20.jpg";
import Icon6 from "@assets/icons/icon-6.svg?react"
import ImageBlock from "../ImageBlock";
import InfoBlock from "../InfoBlock";
import MainButton from "@components/ui/buttons/MainButton"
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

          <div
            className="description">
            <h1
              className="capitalize">
              Investment 
              <br /> projects
            </h1>

            <p
              className="to-middle text-white capitalize">
              Our portfolio is a long-term experience, a variety of complex projects and the implementation of innovative solutions. We approach each client and his project as a unique challenge that we accept. Responsibly performing our work, we will confidently bring it to life.
            </p>

            <MainButton
              arrow={false}
              type="button">
              Order The Project
            </MainButton>
          </div>
        </div>


        <div
          className="section-block">
          <ImageBlock
            src={img19}
            alt="img-19"
            className="placeholder-1" />

          <InfoBlock
            percentage={"15%"}
            icon={<Icon6 />}
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
