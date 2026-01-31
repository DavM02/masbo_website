import './notFound.scss'
import PageTransition from "@components/PageTransition/PageTransition";
import Error from '@components/shared/ui/Error/Error';
function NotFound() {


  return (
    <div
      id='not-found-page'>
      <Error
        text= {"not found"} />
    </div>
  )
}

export default PageTransition(NotFound)
