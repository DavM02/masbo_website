import { AnimatePresence, motion } from "framer-motion";
import SmoothAppearance from "@ui/SmoothAppearance";
import Loading from "@components/shared/Loading/Loading";
import Error from "@components/shared/ui/Error/Error";
import ProjectItem from "./ProjectItem";
import './projectsList.scss'
import { useFetch } from "@hooks/useFetch";
import { getLatestNews } from "@db/loadData";

function limitWords(text, limit = 22) {
  return text.split(/\s+/).slice(0, limit).join(' ');
}



export default function ProjectsList() {


  const {data, isFetching, isLoading, error = true} = useFetch(
    'projects_list',
    () => getLatestNews()
  );    
  
  return (
    <div
      style={{ minHeight: "327px" }}>
      <AnimatePresence
        mode="wait">

        {
          (isLoading || isFetching) ? <SmoothAppearance
            updateLayout={true} 
            key={'loading'}
            style={{minHeight: 'inherit'}}>
            <Loading /> 
          </SmoothAppearance> : (error) ?
            <SmoothAppearance
              updateLayout={true} 
              key={'error'}
              style={{minHeight: 'inherit'}}>
              <Error
                text={"no data found"} /> 
            </SmoothAppearance> :
 
            <SmoothAppearance
              updateLayout={true} 
              Tag={motion.ul}
              className="projects-list row gap-85"
              key={'projects-list'}>
           
              {data.map((el, i) => (
                <ProjectItem
                  el={{...el, text: limitWords(el.text, 22)  }}
                  key={i} />
              ))}
             
            </SmoothAppearance>
      
        }
  
      </AnimatePresence>
    </div>

  );

}
