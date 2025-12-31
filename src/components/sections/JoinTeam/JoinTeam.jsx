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
            Do you want to become a part of team?
          </h3>

          <p
            className='static text-gray text-center capitalize'>
            We offer innovative engineering solutions that ensure the successful achievement of the client&apos;s goals. Because engineering is a result-oriented strategy in action. An i
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
