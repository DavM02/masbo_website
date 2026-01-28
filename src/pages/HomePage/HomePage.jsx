import PageTransition from "@components/PageTransition/PageTransition"

import { lazy, Suspense } from "preact/compat"
   
const HomeSections = lazy(() => import("./HomeSections"));
 

function HomePage() {
 
  return (
    <div
      id='home-page'> 
      <Suspense
        fallback={null}>
        <HomeSections />
      </Suspense>
     

    </div>
  )
}

export default PageTransition(HomePage)