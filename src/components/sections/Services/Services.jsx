import { useRef, useState } from 'preact/hooks';
import SectionHeader from '@components/shared/SectionHeader/SectionHeader';
import DraggableSlider from '@components/shared/DraggableSlider/DraggableSlider';
import MainButton from '@ui/buttons/MainButton';
import './services.scss';
import ServicesData from './ServicesData'


export default function Services() {
  const sliderRef = useRef(null);
  const [ currentIndex, setCurrentIndex ] = useState(0);

  const handleServiceClick = (index) => {
    setCurrentIndex(index);
    sliderRef.current?.scrollTo(index);
  };

  return (
    <>
      <section
        id="services">
        <div
          className="container">
          <SectionHeader
            headline="Our Services"
            num={4} />

          <ul
            className="services-list">
            {ServicesData.map((service, index) => (
              <li
                key={index}
                onClick={() => handleServiceClick(index)}
                className={`column center-y center-x gap-20 cursor-pointer ${index === currentIndex ? 'active' : ''}`}>
                {service.icon}

                <h5
                  className="text-black capitalize">{service.label}</h5>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="services-slider">
        <div
          className="container">
          <DraggableSlider
            ref={sliderRef}
            setCurrentIndex={(index) =>  setCurrentIndex(index)}
            images={ServicesData.map(({ image, label, description }, index) => ({
              src: image,
              children: (
                <div
                  className="service-description column center-x"
                  key={index}>
                  <h3>{label}</h3>

                  <p
                    className="to-middle text-white capitalize">{description}</p>

                  <MainButton
                    arrow={false}
                    type="button">
                    Order The Project
                  </MainButton>
                </div>
              ),
            }))}
            options={{ dragFree: false, axis: "y" }} />

        </div>
      </section>
    </>
  );
}
