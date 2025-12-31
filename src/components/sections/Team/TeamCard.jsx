import { LazyLoadImage } from "react-lazy-load-image-component";

export default function TeamCard({ member, image }) {
  return (
    <li
      className="team-card-item placeholder-1">
      <LazyLoadImage
        src={image}
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
              className="font-bold">Tel: </span>

            {member.tel}

            <br />

            <span
              className="font-bold">Email: </span>

            {member.email}
          </p>
        </div>
      </div>
    </li>
  );
}
