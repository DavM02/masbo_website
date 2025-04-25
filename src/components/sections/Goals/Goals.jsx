import './goals.scss'
import GoalsHeader from './GoalsHeader'
import GoalsIntro from './GoalsIntro'
import GoalsList from './GoalsList'

export default function Goals() {
  return (
    <section
      id="goals">
      <div
        className="container">
        <GoalsHeader />

        <div
          className="row s-between wrap gap-45">
          <GoalsIntro />

          <GoalsList />
        </div>
      </div>
    </section>
  )
}
