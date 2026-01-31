import './goals.scss'
import SectionHeader from '@components/shared/SectionHeader/SectionHeader'
import GoalsIntro from './GoalsIntro'
import AccordionList from '@ui/Accordion/AccordionList'
const items = [
  {
    title: 'Shaping Future Cities',
    text: "We design urban spaces that combine functionality, beauty, and sustainability. Each project considers the community, environment, and long-term impact. Our approach integrates modern technology with innovative planning solutions. We collaborate closely with stakeholders to ensure the city evolves efficiently. The result is dynamic, livable, and inspiring urban environments."
  },
  {
    title: 'Innovative and Impactful Design',
    text: "Every project we create is unique and tailored to the client’s vision. Our designs blend aesthetics with practicality, ensuring spaces are both beautiful and functional. We focus on details, materials, and spatial experience to make every project memorable. Collaboration and creativity drive our process at every stage. The final result is a design that leaves a lasting impression and meets real-world needs."
  },
  {
    title: 'Award-Winning Architecture',
    text: "Our team has been recognized for excellence in architecture and design. Each project reflects our commitment to quality, innovation, and attention to detail. We balance creativity with technical expertise to deliver outstanding results. Our portfolio includes projects that set new standards in design and construction. Clients trust us to turn ambitious ideas into tangible, celebrated structures."
  },
];
export default function Goals() {
  return (
    <section
      id="goals">
      <div
        className="container">
        <SectionHeader
          headline="our goals"
          num={1} />

        <div
          className="row s-between wrap gap-45">
          <GoalsIntro />

          <div>
            <AccordionList
              items={items} />
          </div>
        </div>
      </div>
    </section>
  )
}
