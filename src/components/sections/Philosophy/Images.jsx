
import img1 from "@assets/img-25.jpg";
import img2 from "@assets/img-26.jpg";
import img3 from "@assets/img-27.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Images() {
  return (
    <div
      className="images">
      {
        [ img1,
          img2,
          img3 ].map((src, i) => {
          return (<div
            className={`image`}
            key={i}>
            <LazyLoadImage
              width={"100%"}
              height={"100%"}
              effect="opacity"
              src={src}
              alt={`philosophy-${i + 1}`} />
          </div>)
        })
      }
    </div>
  );
}
 