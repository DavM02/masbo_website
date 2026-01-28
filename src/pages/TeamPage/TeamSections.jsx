import Loading from "@components/shared/Loading/Loading";

import { lazy, Suspense } from "preact/compat"

const TeamSectionsChilren = lazy(() => import("./TeamSectionsChilren"));

function TeamSections() {
 
  return (
    <Suspense
      fallback={Loading}> 
      <TeamSectionsChilren />
    </Suspense>
  )
}

export default TeamSections