import TextLineAnimation from "@components/shared/TextLineAnimation/TextLineAnimation";
import tick from "@assets/tick.svg";

export default function PhilosophyText() {
  return (
    <div>
      <TextLineAnimation
        lines={[
          "Shaping the Future with", "Smart Design & Engineering",
        ]} />

      <p
        className="static text-gray capitalize">
        We deliver cutting-edge engineering solutions that align with our clients’ vision and objectives — because engineering is strategy in action.
      </p>

      <ul
        className="column gap-25">
        {[
          "Integrating environmental responsibility and sustainability into every design.",
          "Creating spaces that promote social equity and well-being.",
          "Balancing innovation with economic feasibility and long-term value.",
        ].map((text, i) => (
          <li
            key={i}
            className="row gap-10 start-y">
            <img
              src={tick}
              alt="tick" />

            <p
              className="static text-black capitalize">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
