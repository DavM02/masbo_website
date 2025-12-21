import './goals.scss'
import SectionHeader from '@components/shared/SectionHeader/SectionHeader'
import GoalsIntro from './GoalsIntro'
import AccordionList from '@ui/Accordion/AccordionList'

const items = [
  'Building the Future Cities',
  'Unique and Influential Design',
  'Award-Winning Arhitecture'
]

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
