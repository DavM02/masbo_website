import Accordion from './Accordion'
import { useState } from 'preact/hooks'

export default function AccordionList({items}) {
  const [ content, setContent ] = useState(0)

  const handleShowContent = (i) => {
    setContent(prev => (prev === i ? 0 : i))
  }

  return (

    <ul
      className="accordion-list column">
      {items.map((heading, i) => (
        <Accordion
          key={i}
          index={i + 1}
          heading={heading}
          text={"We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action. An individual approach and attention to detail in the development of engineering systems allows us to obtain reliable, verified solutions. Simply put, we think over the operation of facilities based on practical experience and scientific knowledge."}
          isOpen={content === i + 1}
          onClick={() => handleShowContent(i + 1)} />
      ))}
    </ul>

  )
}
