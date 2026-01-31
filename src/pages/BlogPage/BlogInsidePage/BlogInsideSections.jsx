import BlogInsideHeading from "@components/sections/BlogInsideHeading/BlogInsideHeading"
import BlogContent from "@components/sections/BlogContent/BlogContent"
import LatestNews from "@components/sections/LatestNews/LatestNews"

import { useLocation } from "react-router-dom";
import { useFetch } from "@hooks/useFetch";
import { getItem } from "@db/loadData";
import Loading from "@components/shared/Loading/Loading";
import SmoothAppearance from "@ui/SmoothAppearance";
import { AnimatePresence } from "framer-motion";
import Error from "@components/shared/ui/Error/Error";
 

export default function BlogInsideSections() {

  const { pathname } = useLocation();
 
  const blogId = Number(pathname.split('/').pop().split('-')[1]);

  const { data, isLoading, isFetching, error } = useFetch(
    `blog_${blogId}`,
    () => getItem([ blogId, 'blog' ])
  );
 

  return (
    <>
      <AnimatePresence
        mode="wait">
        {
          (isLoading || isFetching) ? <SmoothAppearance
            updateLayout={true}
            key={'loading'}
            style={{minHeight: 'inherit',}}>
            <Loading /> 
          </SmoothAppearance> : (error || data === null || data === undefined) ?
            <SmoothAppearance
              updateLayout={true}
              className="container"
              key={'error'}
              style={{minHeight: 'inherit'}}>
              <Error
                text={"no data found"} /> 
            </SmoothAppearance> :
            <SmoothAppearance
              updateLayout={true}
            
              key={blogId}>
              <BlogInsideHeading
                data={{
                  title: data.title,
                  category: data.category,
                  author: data.author,
                  date: data.date
                }} />

              <BlogContent
                data={data} />

              <LatestNews />
            </SmoothAppearance>
        }

      </AnimatePresence>
  
    </>
  )
}