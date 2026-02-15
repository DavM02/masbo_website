import PageTransition from "@components/PageTransition/PageTransition";
import { useLazyComponent } from "@hooks/useLazyComponent";
import Loading from "@components/shared/Loading/Loading";
import { memo } from "preact/compat";

function AboutPage() {
  const AboutSections = useLazyComponent(() => import("./AboutSections"));

  return (
    <>
          <div style={{ height: '500px', backgroundColor: 'red' }}> </div>
          <div style={{ height: '500px', backgroundColor: 'blue' }}> </div>
           <div style={{height: '500px', backgroundColor: 'pink'}}> </div>
      {/* {AboutSections ? <AboutSections /> : <Loading />} */}
    </>
  );
}

 

export default PageTransition(memo(AboutPage));
