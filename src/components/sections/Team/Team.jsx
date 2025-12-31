import SectionHeader from "@components/shared/SectionHeader/SectionHeader";
import './team.scss';
import TeamGroup from "./TeamGroup";
import teams from "./Team";

export default function Team() {
  const images = import.meta.glob('/src/assets/team/team-img*.jpg', {
    eager: true,
    import: 'default',
  });

  const imageList = Object.values(images).sort(
    (a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0])
  );

  const chunk = (arr, size) => {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
      res.push(arr.slice(i, i + size));
    }
    return res;
  };


  const imageChunks = chunk(imageList, 4);

  return (
    <section
      id="team">
      <div
        className="container">
        <SectionHeader
          headline="Our Team"
          num={3} />
      </div>

      {teams.map((team, idx) => (
        <TeamGroup
          key={team.name}
          team={team}
          images={imageChunks[idx]} />
      ))}
    </section>
  );
}
