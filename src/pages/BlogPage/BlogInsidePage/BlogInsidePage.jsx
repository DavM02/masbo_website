import PageTransition from "@components/PageTransition/PageTransition";
import { useLazyComponent } from "@hooks/useLazyComponent";
import Loading from "@components/shared/Loading/Loading";
import { memo } from "preact/compat";

function BlogInsidePage() {
  const BlogInsideSections = useLazyComponent(() => import("./BlogInsideSections"));

  return (
    <div
      style={{ zIndex: 509, position: 'relative'}}
      id="blog-inside-page">
      {BlogInsideSections ? <BlogInsideSections /> : <Loading />}
    </div>
  );
}

 

export default PageTransition(memo(BlogInsidePage));
