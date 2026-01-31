import AccordionList from '@ui/Accordion/AccordionList';
import './servicesDetails.scss';
import { servicesDetailsData } from './ServicesDetailsData';

export default function ServicesDetails() {
  return (
    <section
      id="services-details">
      <div
        className="container">
        <div
          className="row wrap gap-35 s-between">
          <AccordionList
            items={servicesDetailsData.slice(0, 4)} />

          <AccordionList
            items={servicesDetailsData.slice(4)} />
        </div>
      </div>
    </section>
  );
}
