import PageTransition from "@components/PageTransition/PageTransition";
import AboutHeading from "@components/sections/AboutHeading/AboutHeading";


function AboutPage() {
  return (
    <div
      id="about-page">
      <AboutHeading />
    </div>
  )
}

export default  PageTransition(AboutPage)
