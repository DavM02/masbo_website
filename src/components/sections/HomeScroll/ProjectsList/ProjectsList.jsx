import MainButton from '@components/ui/buttons/MainButton'
import Projects from './Projects'
 
export default function ProjectsList() {
  return (
    <section
      className='projects-list'>
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
                type="button">
                learn more
              </MainButton>
            </div>

          </div>

          <Projects />
        </div>
      </div>
    </section>
  )
}
