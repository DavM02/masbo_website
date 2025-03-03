import Home from "@sections/Home/Home"
import HomeScroll from "@sections/HomeScroll/HomeScroll"
import PageTransition from "@components/PageTransition/PageTransition"
 

 

export default function HomePage() {
 
  return (
    <PageTransition
      id='home-page'> 
 
      <Home />

      <HomeScroll />


    </PageTransition>
  )
}
