import MainButton from '@ui/buttons/MainButton'
import './projects.scss'
import ProjectsList from '@components/shared/ProjectsList/ProjectsList'
import { useNavigate } from 'react-router-dom'

export default function Projects() {

  const navigate = useNavigate()
  return (
    <section
      className='projects'>
      <div
        className='row center-y full-height'>
        <div
          className='container'>
          <div
            className='text-wrapper row gap-50'>
            <h1
              className='capitalize'>
                Our <br /> Approach
            </h1>


            <div>
              <p
                className='to-middle text-white capitalize'>
                At MasBo, architecture meets modern technology.  
                Collaboration drives every project — we bring together experts in architecture, design, engineering, and construction to create solutions that are both innovative and practical.  
                Every step is carefully planned to ensure efficiency, quality, and a seamless experience for our clients.
              </p>

              <MainButton
                onCLick={() => navigate('/portfolio')}
                type="button">
                learn more
              </MainButton>
            </div>

          </div>

          <ProjectsList />
        </div>
      </div>
    </section>
  )
}
