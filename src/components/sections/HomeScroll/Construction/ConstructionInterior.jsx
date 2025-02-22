import ImageBlock from "../ImageBlock";
import InfoBlock from "../InfoBlock";
import MainButton from "@components/ui/buttons/MainButton";

import img5 from "@assets/img-5.jpg";
import img6 from "@assets/img-6.jpg";
import img7 from "@assets/img-7.jpg";
import img8 from "@assets/img-8.jpg";
import img9 from "@assets/img-9.jpg";
import img10 from "@assets/img-10.jpg";

import icon1 from "@assets/icons/icon-1.svg";
import icon3 from "@assets/icons/icon-3.svg";
import icon4 from "@assets/icons/icon-4.svg";
 

export default function ConstructionInterior() {
  return (
    <section
      className="construction">
      <div
        className="row full-height">
        <div
          className="section-block">
          <ImageBlock
            src={img5}
            alt="img-5"
            className="placeholder-1" />

          <InfoBlock
            icon={icon3}
            title="Construction"
            text="MasBo is an architectural group working in <br/> the field of architecture and urban planning." />
        </div>

        <div
          className="section-block full-height"> 
          <ImageBlock
            src={img6}
            alt="img-6"
            className="placeholder-2 full-height" />

          <div
            className="description">
            <h1
              className="capitalize">
              innovative <br /> engineering

              <br /> solutions
            </h1>

            <p
              className="to-middle text-white capitalize">
              We offer innovative engineering solutions that ensure the successful achievement of the client&apos;s goals. Because engineering is a result-oriented strategy in action. An individual approach and attention to detail in the development of engineering systems allows us to obtain reliable, verified solutions. Simply put, we think over the operation of facilities based on practical experience and scientific knowledge.
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
          <InfoBlock
            icon={icon4}
            title="Interior"
            text="MasBo is an architectural group working in <br/> the field of architecture and urban planning." />

          <ImageBlock
            src={img7}
            alt="img-7"
            className="placeholder-2" />

          <ImageBlock
            src={img8}
            alt="img-8"
            className="placeholder-1" />
        </div>

        <div
          className="section-block full-height ">
          <ImageBlock
            src={img9}
            alt="img-9"
            className="placeholder-1 full-height" />

          <div
            className="description">
            <h1
              className="capitalize">
              interior & <br /> landscape

              <br /> design
            </h1>

            <p
              className="to-middle text-white capitalize">
              We create a comfortable space for living and working, entertainment and education. High-quality and thoughtful design not only pleases the eye, but creates a healthy environment for a comfortable and intuitive use of the room.
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
            src={img10}
            alt="img-10"
            className="placeholder-2" />

          <InfoBlock
            icon={icon1}
            title="Landscape Design"
            text="MasBo is an architectural group working in <br/> the field of architecture and urban planning." />
        </div>
      </div>
    </section>
  );
}
