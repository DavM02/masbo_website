import MainButton from '@ui/buttons/MainButton';
import { useNavigate } from 'react-router-dom';

function Error({text}) {

  const navigate = useNavigate();

  return (
    <div
      className='center-gr gap-10'
      style={{minHeight: 'inherit'}}>
      <h2
        className='capitalize text-gray text-center'>{text}</h2>
          
      <div
        className='row center-x'>
        <MainButton
          onClick={() => navigate(-1)}
          arrow={false}
          type={'button'}>go back</MainButton>
      </div>
    </div>
  )
}

export default Error
