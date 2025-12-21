import project from '@assets/project.svg'


const projects = [
  [ 'Soho Penthouse',
    'Interior Design',
    'Modern Studio',
    '2023' ],
  [ 'Villa Aurora',
    'Exterior Design',
    'Studio Nova',
    '2024' ],
  [ 'Downtown Loft',
    'Concept Design',
    'Skyline Works',
    '2022' ],
  [ 'Ocean View House',
    'Full Renovation',
    'Wave Architects',
    '2023' ]
]

export default function LastProjects() {
  return (
    <div
      className="last-projects row s-between gap-50">
      <div>
        <p
          className="static text-gray capitalize">
          Discover our portfolio of award-winning designs developed with precision and passion for excellence.
        </p>

        <ul
          className="column gap-20">
          {
            projects.map((el, i) => {
              return (
                <li
                  key={i}
                  id={i}>
                  <span
                    className="fs-14 font-bold text-black">{el[0]}</span>

                  <span
                    className="fs-14 font-bold">{el[1]}</span>

                  <span
                    className="fs-14 font-bold text-black">{el[2]}</span>

                  <span
                    className="fs-14 font-bold">{el[3]}</span>  
                </li>
              )
            })
          }
        </ul>
      </div>

      <div>
        <img
          alt="project"
          src={project} />
      </div>
    </div>
  )
}
