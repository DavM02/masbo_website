import { LazyLoadImage } from 'react-lazy-load-image-component';
import MainButton from '@ui/buttons/MainButton';
import { useNavigate } from 'react-router-dom';

export default function BlogCard({ item }) {
    
  const navigate = useNavigate();

  const openBlog = (slug) => {
    navigate(slug);  
  };
  return (
    <li
      className={`blog-card`}>
      <div
        className={`blog-card-image placeholder-${((item.id - 1) % 3) + 1}`}>
        <LazyLoadImage

          width="100%"
          height="100%"
          effect="opacity"
          src={`${import.meta.env.BASE_URL}${item.image}`} />
      </div>


      <div
        className='blog-card-description column gap-15'>
                              
        <div
          className="row center-y wrap gap-10">
              
          <span
            className="fs-12 text-black up-case"> {item.date}</span>
             
          <div
            className='line'></div>
                  
          <span
            className="fs-12 text-black up-case">{item.category}</span>
             
          <div
            className='line'></div>

          <span
            className="fs-12 text-black up-case">
            by {item.author}
          </span>
        </div>
                    
        <h3
          className="text-gray capitalize">{item.title}</h3>

        <p
          className='to-middle text-gray capitalize'>
          {item.text}
        </p>
      </div>
                   
      <MainButton
        arrow
        onClick={() => {
          openBlog(`blog-${item.id}`)
        }}
        type="button">
        read more
      </MainButton>
    </li>
  )
}
