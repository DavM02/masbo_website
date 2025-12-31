import TeamCard from "./TeamCard";

export default function TeamGroup({ team, images }) {
  return (
    <div
      className="team-group-block">
      <div
        className="container">
        <h3
          className="text-gray capitalize">{team.name}</h3>

        <p
          className="static text-gray capitalize">{team.description}</p>
      </div>

      <ul
        className="team-cards">
        {team.members.map((member, i) => (
          <TeamCard
            key={i}
            member={member}
            image={images?.[i]} />
        ))}
      </ul>
    </div>
  );
}
