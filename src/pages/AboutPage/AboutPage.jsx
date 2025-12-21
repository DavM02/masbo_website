import PageTransition from "@components/PageTransition/PageTransition";
import AboutHeading from "@sections/AboutHeading/AboutHeading";
import Goals from "@sections/Goals/Goals";
import Details from "@sections/Details/Details";
import AboutSlider from "@sections/AboutSlider/AboutSlider";
import Achievements from "@sections/Achievements/Achievements";
import Philosophy from "@sections/Philosophy/Philosophy";


function AboutPage() {
  return (
    <div
      id="about-page">
      <AboutHeading />

      <Goals />

      <Details />

      <AboutSlider />

      <Philosophy />

      <Achievements />
    </div>
  )
}

export default  PageTransition(AboutPage)
