import PageTransition from "@components/PageTransition/PageTransition"
import { lazy, Suspense } from "preact/compat"

 

const BlogInsideSections = lazy(() => import("./BlogInsideSections"))

function BlogInsidePage() {
 
  return (
    <div
      id="blog-inside-page">
      <Suspense
        fallback={null}>
        <BlogInsideSections />
      </Suspense>
    </div>
  )
}

export default PageTransition(BlogInsidePage)
