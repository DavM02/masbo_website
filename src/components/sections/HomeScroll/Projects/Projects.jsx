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
              how we are
              <br /> working
            </h1>


            <div>
              <p
                className='to-middle text-white capitalize'>
                Arhitecture modern technology
                Collaboration is a priority at MasBo. We believe that the best result can only be achieved through constant dialogue between all stakeholders. Our practice brings together experts in the field of architecture, design, engineering and construction, to solve any tasks assigned to us.
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
