
import img1 from "@assets/img-25.jpg";
import img2 from "@assets/img-26.jpg";
import img3 from "@assets/img-27.jpg";

export default function Images() {
  return (
    <div
      className="images">
      {
        [ img1,
          img2,
          img3 ].map((src, i) => {
          return (<div
            className="image"
            key={i}>
            <img
              src={src}
              alt={`philosophy-${i + 1}`} />
          </div>)
        })
      }
    </div>
  );
}
 