import PageTransition from "@components/PageTransition/PageTransition"
import { lazy, Suspense } from "preact/compat"
 
const ServicesSections = lazy(() => import("./ServicesSections"));

function ServicesPage() {
 
  return (
    <div
      id='services-page'> 
      <Suspense
        fallback={null}>
        <ServicesSections />
      </Suspense>
    </div>
  )
}

export default PageTransition(ServicesPage)