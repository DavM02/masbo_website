import PageTransition from "@components/PageTransition/PageTransition"
 
import { lazy, Suspense } from "preact/compat";
 
 
const BlogSections = lazy(() => import("./BlogSections"))
 

function BlogPage() {
 
  return (
    <div
      id='blog-page'> 
 
      <Suspense
        fallback={null}>
        <BlogSections />
      </Suspense>
 
    </div>
  )
}

export default PageTransition(BlogPage)