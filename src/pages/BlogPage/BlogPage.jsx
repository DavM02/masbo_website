import BlogHeading from "@sections/BlogHeading/BlogHeading";

import PageTransition from "@components/PageTransition/PageTransition"
import Blog from "@components/sections/Blog/Blog";
 

 

function BlogPage() {
 
  return (
    <div
      id='blog-page'> 
 
      <BlogHeading />

      <Blog />
 

    </div>
  )
}

export default PageTransition(BlogPage)