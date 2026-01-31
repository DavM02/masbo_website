import './joinTeam.scss'
import VacancyCard from './VacancyCard';
import vacancies from './Vacancies';

export default function JoinTeam() {
  return (
    <section
      id="join-team">
      <div
        className="container">
        <div
          className='column center-y'>
          <h3
            className="text-gray capitalize">
            Want to Join Our Team?
          </h3>

          <p
            className='static text-gray text-center capitalize'>
            We are always looking for talented and passionate individuals. At MasBo, you will work on innovative projects that shape the future of architecture and design. Your skills and ideas will be valued and developed in a supportive environment.
          </p>
        </div>

        <div
          className='vacancies'>
          {vacancies.map((vacancy, idx) => (
            <VacancyCard
              key={idx}
              vacancy={vacancy} />
          ))}
        </div>
      </div>
    </section>
  );
}
