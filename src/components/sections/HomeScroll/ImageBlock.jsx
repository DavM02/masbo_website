import { LazyLoadImage } from "react-lazy-load-image-component";

const ImageBlock = ({ src, alt, className }) => (
  <div
    className={className}>
    <LazyLoadImage
      src={src}
      width="100%"
      height="100%"
      effect="blur"
      alt={alt} />
  </div>
);


export default ImageBlock