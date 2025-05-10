import PageTransition from "@components/PageTransition/PageTransition";
import AboutHeading from "@components/sections/AboutHeading/AboutHeading";
import Goals from "@components/sections/Goals/Goals";
import Details from "@components/sections/Details/Details";
import AboutSlider from "@components/sections/AboutSlider/AboutSlider";
import Achievements from "@components/sections/Achievements/Achievements";


function AboutPage() {
  return (
    <div
      id="about-page">
      <AboutHeading />

      <Goals />

      <Details />

      <AboutSlider />

      <Achievements />
    </div>
  )
}

export default  PageTransition(AboutPage)
