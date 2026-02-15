import PortfolioInside from "@components/sections/PortfolioInside/PortfolioInside";
import PortfolioGallery from "@components/sections/PortfolioGallery/PortfolioGallery";
import StageOfWorks from "@components/sections/StageOfWorks/StageOfWorks";
import { useParams } from "react-router-dom";
import { useFetch } from "@hooks/useFetch";
import { getItem } from "@db/loadData";
import Loading from "@components/shared/Loading/Loading";
import SmoothAppearance from "@ui/SmoothAppearance";
import { AnimatePresence } from "framer-motion";
import Error from "@components/shared/ui/Error/Error";
 
export default function PortfolioInsideSections() {

  const { slug } = useParams();
 
  const { data, isLoading, isFetching, error } = useFetch(
    `portfolio_${slug}`,
    () => getItem([ Number(slug.replace('project-', '')), 'portfolio' ])  
  );

 
  
  return (
    <>
      <AnimatePresence
        mode="wait">
        {
          (isLoading || isFetching) ? <SmoothAppearance
            updateLayout={true}
            key={'loading'}
            style={{minHeight: 'inherit'}}>
            <Loading /> 
          </SmoothAppearance> : (error || data === null || data === undefined) ?
            <SmoothAppearance
              updateLayout={true}
              key={'error'}
              style={{minHeight: 'inherit'}}>
              <Error
                text={"no data found"} /> 
            </SmoothAppearance> :
            <SmoothAppearance
 
              updateLayout={true}
              key={slug}>
              <PortfolioInside
                project={data} />

              <PortfolioGallery
                images={data?.gallery} />
      
              {/* <StageOfWorks /> */}
            </SmoothAppearance>
        }

      </AnimatePresence>
  
    </>
  )
}
