
import PageTransition from "@components/PageTransition/PageTransition"

 

import { lazy, Suspense } from "preact/compat"
  
const ContactsSections = lazy(() => import("./ContactsSections"));

function ContactsPage() {
 
  return (
    <div
      id='contacts-page'> 
      <Suspense
        fallback={null}>
        <ContactsSections />
      </Suspense>

    </div>
  )
}

export default PageTransition(ContactsPage)