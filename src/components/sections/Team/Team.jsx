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
      description:
      "Our leadership team sets the strategic vision and ensures every project aligns with our mission of delivering innovative engineering solutions.",
      members: [
        {
          name: "Daniel Kim",
          position: "Art Director",
          tel: "+1 (415) 302-18-41",
          email: "daniel.kim@masbo.com",
        },
        {
          name: "Emily Carter",
          position: "Creative Director",
          tel: "+1 (415) 302-18-42",
          email: "emily.carter@masbo.com",
        },
        {
          name: "Michael Brown",
          position: "Lead Architect",
          tel: "+1 (415) 302-18-43",
          email: "michael.brown@masbo.com",
        },
        {
          name: "Alex Johnson",
          position: "Senior Architect",
          tel: "+1 (415) 302-18-44",
          email: "alex.johnson@masbo.com",
        },
      ],
    },
    {
      name: "Architecture Team",
      description:
      "The architecture team crafts the blueprint for success, blending creativity with functionality to design spaces that inspire and endure.",
      members: [
        {
          name: "David Lee",
          position: "Project Manager",
          tel: "+1 (415) 302-18-45",
          email: "david.lee@masbo.com",
        },
        {
          name: "Sophia Martinez",
          position: "Interior Designer",
          tel: "+1 (415) 302-18-46",
          email: "sophia.martinez@masbo.com",
        },
        {
          name: "James Wilson",
          position: "Structural Engineer",
          tel: "+1 (415) 302-18-47",
          email: "james.wilson@masbo.com",
        },
        {
          name: "Ryan Miller",
          position: "Construction Engineer",
          tel: "+1 (415) 302-18-48",
          email: "ryan.miller@masbo.com",
        },
      ],
    },
    {
      name: "Engineering Team",
      description:
      "Our engineers turn ideas into reality, applying technical expertise and precision to solve complex challenges efficiently.",
      members: [
        {
          name: "Olivia Anderson",
          position: "UX / Space Designer",
          tel: "+1 (415) 302-18-49",
          email: "olivia.anderson@masbo.com",
        },
        {
          name: "Natalie White",
          position: "Landscape Architect",
          tel: "+1 (415) 302-18-50",
          email: "natalie.white@masbo.com",
        },
        {
          name: "Christopher Hall",
          position: "BIM Specialist",
          tel: "+1 (415) 302-18-51",
          email: "christopher.hall@masbo.com",
        },
        {
          name: "Andrew Scott",
          position: "Technical Director",
          tel: "+1 (415) 302-18-52",
          email: "andrew.scott@masbo.com",
        },
      ],
    },
    {
      name: "Innovation Team",
      description:
      "The innovation team drives forward-thinking projects, exploring new technologies and methodologies to stay ahead of industry trends.",
      members: [
        {
          name: "Kevin Turner",
          position: "Innovation Lead",
          tel: "+1 (415) 302-18-53",
          email: "kevin.turner@masbo.com",
        },
        {
          name: "Brian Walker",
          position: "Sustainability Engineer",
          tel: "+1 (415) 302-18-54",
          email: "brian.walker@masbo.com",
        },
        {
          name: "Jonathan Perez",
          position: "R&D Engineer",
          tel: "+1 (415) 302-18-55",
          email: "jonathan.perez@masbo.com",
        },
        {
          name: "Mark Thompson",
          position: "Operations Manager",
          tel: "+1 (415) 302-18-56",
          email: "mark.thompson@masbo.com",
        },
      ],
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
            {team.members.map((member, i) => (
              <li
                className="team-card-item placeholder-1"
                key={i}>
                <LazyLoadImage
                  src={imageChunks[idx]?.[i]}
                  width="100%"
                  height="100%"
                  effect="opacity"
                  alt={member.name} />

                <div
                  className="team-card-description row">
                  <div
                    className="line"></div>

                  <div
                    className="self-end-y">
                    <h3
                      className="text-white capitalize">{member.name}</h3>

                    <p
                      className="font-bold static text-white capitalize">
                      {member.position}
                    </p>

                    <p
                      className="static text-white capitalize">
                      <span
                        className="font-bold">Tel:</span>

                      {member.tel}

                      <br />

                      <span
                        className="font-bold">Email:</span>

                      {member.email}
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
