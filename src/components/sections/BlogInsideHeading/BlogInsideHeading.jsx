import Intro from '@components/shared/Intro/Intro'

export default function BlogInsideHeading({ data }) {
  const { date, category, author, title } = data;
  return (
    <Intro
      id="blog-inside-heading">
      
      <div
        className="container">
        <div
          className="column center-x gap-20">
          <h1
            style={{maxWidth: "685px"}}
            className="capitalize text-black"> {title} </h1>

          <div
            className="row center-y wrap gap-10">
              
            <span
              className="fs-12 text-black up-case"> {date}</span>
             
            <div
              className='line'></div>
                  
            <span
              className="fs-12 text-black up-case">{category}</span>
             
            <div
              className='line'></div>

            <span
              className="fs-12 text-black up-case">
              by {author}
            </span>
          </div>
        </div>


      </div>
    </Intro>
  )
}


