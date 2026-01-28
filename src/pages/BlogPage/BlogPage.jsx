import PageTransition from "@components/PageTransition/PageTransition";
import { useLazyComponent } from "@hooks/useLazyComponent";
import Loading from "@components/shared/Loading/Loading";
import { memo } from "preact/compat";

function BlogPage() {
  const BlogSections = useLazyComponent(() => import("./BlogSections"));

  return (
    <div
      id="blog-page">
      {BlogSections ? <BlogSections /> : <Loading />}
    </div>
  );
}

 

export default PageTransition(memo(BlogPage));
