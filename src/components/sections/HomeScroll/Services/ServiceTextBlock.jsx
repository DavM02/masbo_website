import MainButton from '@ui/buttons/MainButton';

export default function ServiceTextBlock() {
  return (
 
    <div
      className='container'>
      <div
        className='row center-x center-y full-height'>
        <div
          className='text-wrapper row gap-50'>
          <h1
            className='capitalize'>What we <br /> engage?</h1>

          <div>
            <p
              className='to-middle text-white capitalize'>
              Our portfolio is a long-term experience, a variety of complex projects and the implementation of innovative solutions. We approach each client and his project as a unique challenge that we accept. Responsibly performing our work, we will confidently bring it to life.
            </p>

            <MainButton
              arrow={true}
              type='button'>Learn more</MainButton>
          </div>
        </div>
      </div>
    </div>
 
  )
}
