import Home from "@sections/Home/Home"
import HomeScroll from "@sections/HomeScroll/HomeScroll"
import PageTransition from "@components/PageTransition/PageTransition"
 

 

function HomePage() {
 
  return (
    <div
      id='home-page'> 
 
      <Home />

      <HomeScroll />


    </div>
  )
}

export default PageTransition(HomePage)