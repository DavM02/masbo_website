import InfoBlock from "../InfoBlock";
import MainButton from "@components/ui/buttons/MainButton";

import img1 from "@assets/img-1.jpg";
import img2 from "@assets/img-2.jpg";
import img3 from "@assets/img-3.jpg";
import img4 from "@assets/img-4.jpg";

import icon1 from "@assets/icons/icon-1.svg";
import icon2 from "@assets/icons/icon-2.svg";

import ImageBlock from "../ImageBlock";

import './architecture.scss'

export default function ArchitectureEngineering() {
  return (
    <section
      className="architecture">
      <div
        className="row full-height">
        <div
          className="section-block full-height">
          <InfoBlock
            icon={icon1}
            title="Architecture"
            text="MasBo is an architectural group working in  <br/> the field of architecture and urban planning." />

          <InfoBlock
            icon={icon2}
            title="Engineering"
            text="Modern solutions for the modern city." />

          <ImageBlock
            src={img1}
            alt="img-1"
            className="placeholder-2" />
        </div>

        <div
          className="section-block full-height">
          <ImageBlock
            src={img2}
            alt="img-2"
        
            className="placeholder-1 full-height" />

          <div
            className="description">
            <h1
              className="capitalize">
              innovative <br /> engineering &

              <br /> architecture

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
          className="section-block full-height">
          <ImageBlock
            src={img3}
            alt="img-3"
            className="placeholder-2" />

          <ImageBlock
            src={img4}
            alt="img-4"
            className="placeholder-1" />
        </div>
      </div>
    </section>
  );
}
