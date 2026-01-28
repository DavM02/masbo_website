import PageTransition from "@components/PageTransition/PageTransition" 
import Loading from "@components/shared/Loading/Loading";

import { lazy, Suspense } from "preact/compat"

const TeamSections = lazy(() => import("./TeamSections"));

function TeamPage() {

  return (
    <div
      id='team-page'> 
      <Suspense
        
        fallback={    <Loading />}>
        <TeamSections />
      </Suspense>
  
    </div>
  )
}

export default PageTransition(TeamPage)