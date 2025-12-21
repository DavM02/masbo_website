import AccordionList from '@ui/Accordion/AccordionList';
import './servicesDetails.scss'

const items = [ "Sketch of style and mood",
  "3D visualization",
  "specification for components",
  "Author's supervision",
  "interior concept",
  "design project",
  "working documentation" ]
  
    
export default function ServicesDetails() {
  return (
    <section
      id="services-details">
      <div
        className="container">
        <div
          className="row wrap gap-35 s-between">
          <AccordionList
            items={items.slice(0, 4)} />

          <AccordionList
            items={items.slice(4)} />
        </div>
      </div>
    </section>
  )
}
