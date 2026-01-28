import PageTransition from "@components/PageTransition/PageTransition";
import { useLazyComponent } from "@hooks/useLazyComponent";
import Loading from "@components/shared/Loading/Loading";
import { memo } from "preact/compat";

function AboutPage() {
  const AboutSections = useLazyComponent(() => import("./AboutSections"));

  return (
    <div
      id="about-page">
      {AboutSections ? <AboutSections /> : <Loading />}
    </div>
  );
}

 

export default PageTransition(memo(AboutPage));
