import InfoBlock from "../InfoBlock";
import MainButton from "@ui/buttons/MainButton";

import img1 from "@assets/img-1.jpg";
import img2 from "@assets/img-2.jpg";
import img3 from "@assets/img-3.jpg";
import img4 from "@assets/img-4.jpg";

import Icon1 from "@assets/icons/icon-1.svg?react";
import Icon2 from "@assets/icons/icon-2.svg?react";

import ImageBlock from "../ImageBlock";

import { useNavigate } from "react-router-dom";

export default function ArchitectureEngineering() {

  const navigate = useNavigate()

  return (
    <section
      className="architecture">
      <div
        className="row full-height">
        <div
          className="section-block full-height">
          <InfoBlock
            percentage={"14%"}
            icon={<Icon1 />}
            title="Architecture"
            text="Designing functional and aesthetic spaces <br/> for modern urban life." />

          <InfoBlock
            icon={<Icon2 />}
            title="Engineering"
            text="Applying innovative technical solutions  <br/> for sustainable buildings." />

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
              Modern  <br /> Design   &

              <br /> Real

              <br /> Results
            </h1>

            <p
              className="to-middle text-white capitalize">
              We develop engineering solutions that combine creativity and practicality.  
              Each project receives an individual approach, ensuring reliable systems and efficient operation.  
              Our designs are grounded in real-world experience and advanced technical knowledge, delivering spaces that perform as they inspire.            </p>

            <MainButton
              arrow={false}
              onClick={() => navigate('/contact')}
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
