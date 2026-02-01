import { LazyLoadImage } from 'react-lazy-load-image-component';
import MainButton from '@ui/buttons/MainButton';
import { useNavigate } from 'react-router-dom';


export default function PortfolioCard({ item }) {

  const navigate = useNavigate();

  const openProject = (slug) => {
    navigate(slug);  
  };

  console.log(item.image)
  return (
    <li
      className={`portfolio-card ${item.placeholder}`}>
      {/* <LazyLoadImage
        width="100%"
        height="100%"
        effect="opacity"
        src={`${import.meta.env.BASE_URL}${item.image?.replace(/^\/+/,'')}`} /> */}

      <div
        className="portfolio-card-description row gap-25">
        <div
          className="line"></div>

        <div
          className="row self-end-y s-between gap-35">
          <div>
            <h3
              className="text-white capitalize">{item.title}</h3>

            <p
              className="to-middle text-white capitalize">
              {item.previewDescription}
            </p>
          </div>

          <div
            className="self-center-y">
            <MainButton
              arrow
              onClick={() => {
                openProject(`project-${item.id}`)
              }}
              type="button">
              read more
            </MainButton>
          </div>
        </div>
      </div>
    </li>
  );
}
