import ImageBlock from "../ImageBlock";
import InfoBlock from "../InfoBlock";
import MainButton from "@ui/buttons/MainButton";

import img5 from "@assets/img-5.jpg";
import img6 from "@assets/img-6.jpg";
import img7 from "@assets/img-7.jpg";
import img8 from "@assets/img-8.jpg";
import img9 from "@assets/img-9.jpg";
import img10 from "@assets/img-10.jpg";

import Icon1 from "@assets/icons/icon-1.svg?react";
import Icon3 from "@assets/icons/icon-3.svg?react";
import Icon4 from "@assets/icons/icon-4.svg?react";

import { useNavigate } from "react-router-dom";
 

export default function ConstructionInterior() {

  const navigate = useNavigate()

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
            percentage={"55%"}
            icon={<Icon3 />}
            title="Construction"
            text="Delivering reliable and efficient building solutions <br/> for modern structures." />
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
              We design engineering systems that combine creativity with functionality.  
              Each solution is tailored to the project, ensuring efficiency, safety, and long-term performance.            </p>

            <MainButton
              arrow={false}
              onClick={() => {
                navigate('/contact')
              }}
              type="button">
              Order The Project
            </MainButton>
          </div>
        </div>

        <div
          className="section-block">
          <InfoBlock
            percentage={"45%"}
            icon={<Icon4 />}
            title="Interior Design"
            text="Creating thoughtful interiors that balance <br/> style, comfort, and practicality." />

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
              We craft spaces that are functional, beautiful, and harmonious with their surroundings.  
              Every detail is considered to enhance comfort, aesthetics, and usability.            </p>

            <MainButton
              arrow={false}
              type="button"
              onClick={() => {
                navigate('/contact')
              }}>
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
            percentage={"14%"}
            icon={<Icon1 />}
            title="Landscape Design"
            text="Designing outdoor spaces that complement architecture <br/> and enhance daily life." />
        </div>
      </div>
    </section>
  );
}
