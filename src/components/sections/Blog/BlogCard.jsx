import { LazyLoadImage } from 'react-lazy-load-image-component';
import MainButton from '@ui/buttons/MainButton';

export default function BlogCard({item}) {
  return (
    <li
      className={`blog-card`}>
      <div
        className={`blog-card-image placeholder-${((item.id - 1) % 3) + 1}`}>
        <LazyLoadImage

          width="100%"
          height="100%"
          effect="opacity"
          src={item.image} />
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

        type="button">
        read more
      </MainButton>
    </li>
  )
}
