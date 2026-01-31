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
      {items.map((el, i) => (
        <Accordion
          key={i}
          index={i + 1}
          heading={el.title}
          text={el.text}
          isOpen={content === i + 1}
          onClick={() => handleShowContent(i + 1)} />
      ))}
    </ul>

  )
}
