import GoalItem from './GoalItem'
import { useState } from 'preact/hooks'

const items = [
  'Building the Future Cities',
  'Unique and Influential Design',
  'Award-Winning Arhitecture'
]

export default function GoalsList() {
  const [ content, setContent ] = useState(0)

  const handleShowContent = (i) => {
    setContent(prev => (prev === i ? 0 : i))
  }

  return (
    <div>
      <ul
        className="column">
        {items.map((text, i) => (
          <GoalItem
            key={i}
            index={i + 1}
            text={text}
            isOpen={content === i + 1}
            onClick={() => handleShowContent(i + 1)} />
        ))}
      </ul>
    </div>
  )
}
