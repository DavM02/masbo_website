import PageTransition from "@components/PageTransition/PageTransition" 
 

import { lazy, Suspense } from "preact/compat"

const TeamSections = lazy(() => import("./TeamSections"));

function TeamPage() {

  return (
    <div
      id='team-page'> 
      <Suspense
        fallback={null}>
        <TeamSections />
      </Suspense>
    </div>
  )
}

export default PageTransition(TeamPage)