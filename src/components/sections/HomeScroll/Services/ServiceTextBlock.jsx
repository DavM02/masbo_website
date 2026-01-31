import MainButton from '@ui/buttons/MainButton';
import { useNavigate } from 'react-router-dom';
export default function ServiceTextBlock() {

  const navigate = useNavigate()
  return (
 
    <div
      className='container'>
      <div
        className='row center-x center-y full-height'>
        <div
          className='text-wrapper row gap-50'>
          <h1
            className='capitalize'>  Our <br /> Expertise</h1>

          <div>
            <p
              className='to-middle text-white capitalize'>
              We handle diverse and complex projects, delivering innovative solutions every time.  
              Each client and project is treated as a unique challenge, and we bring it to life with care, precision, and a focus on results.            </p>

            <MainButton
              onClick={() => navigate('/portfolio')}
              arrow={true}
              type='button'>Learn more</MainButton>
          </div>
        </div>
      </div>
    </div>
 
  )
}
