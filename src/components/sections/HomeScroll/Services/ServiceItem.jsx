import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ServiceItem({ img, icon, title, className }) {
  return (
    <div
      className={className}>
      <LazyLoadImage
        src={img}
        width={'100%'}
        height={'100%'}
        effect='blur'
        alt={title} />

      <div
        className='column center-y center-x gap-10'>
        <img
          className='icon'
          alt='icon'
          src={icon} />

        <h6>{title}</h6>
      </div>
    </div>
  );
}