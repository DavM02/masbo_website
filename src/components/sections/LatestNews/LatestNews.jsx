import './latestNews.scss'
import ProjectsList from '@components/shared/ProjectsList/ProjectsList'
export default function LatestNews() {
  return (
    <section
      id='latest-news'>
      
      <div
        className="container">
        <div
          className='line'></div>

        <h3
          className="text-gray capitalize">latest news</h3>

        <ProjectsList />
      </div>
    </section>
  )
}
