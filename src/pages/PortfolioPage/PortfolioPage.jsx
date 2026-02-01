import { useLazyComponent } from "@hooks/useLazyComponent";
import Loading from "@components/shared/Loading/Loading";
import Portfolio from "../../components/sections/Portfolio/Portfolio";
export default function PortfolioPage() {

  // const PortfolioSections = useLazyComponent(() => import("@components/sections/Portfolio/Portfolio"));


  return (<>
    
    {/* {PortfolioSections ? <PortfolioSections  /> : <Loading />} */}
    <Portfolio />     
  </>) 
}