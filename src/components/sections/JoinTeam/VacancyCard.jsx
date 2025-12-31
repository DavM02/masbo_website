import MainButton from '@ui/buttons/MainButton';

export default function VacancyCard({ vacancy }) {
  return (
    <div
      className='vacancy'>
      <div
        className='row s-between gap-15'>
        <h5
          className='text-gray'>{vacancy.title}-</h5>

        <div
          className='row wrap end-x gap-15'>
          <h6
            className='up-case text-white'>{vacancy.workType}</h6>

          <h6
            className='up-case text-gray'>{vacancy.deadline}</h6>
        </div>
      </div>

      <div
        className='row wrap s-between gap-40'>

        <div>
          <span
            className="fs-14 font-bold text-black capitalize">requirements -</span>

          <ul>
            {vacancy.requirements.map((req, i) => (
              <li
                key={i}>
                <p
                  className='to-middle text-gray capitalize'>- {req}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span
            className="fs-14 font-bold text-black capitalize">offer -</span>

          <ul>
            {vacancy.offer.map((item, i) => (
              <li
                key={i}>
                <p
                  className='to-middle text-gray capitalize'>- {item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div
          className='self-end-x self-end-y'>
          <MainButton
            arrow={true}
            type='button'>Fill the form</MainButton>
        </div>
      </div>
    </div>
  );
}
