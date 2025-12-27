import SectionHeader from "@components/shared/SectionHeader/SectionHeader";
import './team.scss'
import { LazyLoadImage } from "react-lazy-load-image-component";

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

  const teams = [
    {
      name: "Leadership Team",
      description: "Our leadership team sets the strategic vision and ensures every project aligns with our mission of delivering innovative engineering solutions.",
    },
    {
      name: "Architecture Team",
      description: "The architecture team crafts the blueprint for success, blending creativity with functionality to design spaces that inspire and endure.",
    },
    {
      name: "Engineering Team",
      description: "Our engineers turn ideas into reality, applying technical expertise and precision to solve complex challenges efficiently.",
    },
    {
      name: "Innovation Team",
      description: "The innovation team drives forward-thinking projects, exploring new technologies and methodologies to stay ahead of industry trends.",
    },
  ];

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
        <div
          className="team-group-block"
          key={team.name}>
          <div
            className="container">
            <h3
              className="text-gray capitalize">{team.name}</h3>

            <p
              className="static text-gray capitalize">{team.description}</p>
          </div>

          <ul
            className="team-cards">
            {imageChunks[idx]?.map((img, i) => (
              <li
                className="team-card-item placeholder-1"
                key={i}>
                <LazyLoadImage
                  src={img}
                  width="100%"
                  height="100%"
                  effect="opacity"
                  alt={`team member ${i + 1}`} />

                <div
                  className="team-card-description row">
                  <div
                    className="line"></div>

                  <div
                    className="self-end-y">  
                    <h3
                      className={"text-white capitalize"}>
                      Daniel Kim
                    </h3>

                    <p
                      className="font-bold static text-white capitalize">art director</p>


                    <p
                      className="static text-white capitalize">
                  
                      <span
                        className="font-bold ">Tel:</span> +3 (096) 029-81-18, +3 (063) 023-81-18

                      <br /> 

                      <span
                        className="font-bold">Email</span>: office@masbo.com.ua 

                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
