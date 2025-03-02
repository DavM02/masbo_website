import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ServiceItem({ img, icon, title, className }) {
  return (
    <div className={className}>
      <LazyLoadImage
        src={img}
        width={"100%"}
        height={"100%"}
        effect="opacity"
        alt={title}
      />

      <div className="column center-y center-x gap-10">
        <img className="icon" alt="icon" src={icon} />

        <h5>{title}</h5>
      </div>
    </div>
  );
}
