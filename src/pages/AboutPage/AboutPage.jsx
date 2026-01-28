import PageTransition from "@components/PageTransition/PageTransition";

import { lazy, Suspense} from "preact/compat"
 
 
const AboutSections = lazy(() => import("./AboutSections"));

function AboutPage() {
  return (
    <div
      id="about-page">
      <Suspense
        fallback={null}>
        <AboutSections />
      </Suspense>
    </div>
  )
}

export default PageTransition(AboutPage)
