import PageTransition from "@components/PageTransition/PageTransition";
import AboutHeading from "@components/sections/AboutHeading/AboutHeading";
import Goals from "@components/sections/Goals/Goals";


function AboutPage() {
  return (
    <div
      id="about-page">
      <AboutHeading />

      <Goals />
    </div>
  )
}

export default  PageTransition(AboutPage)
