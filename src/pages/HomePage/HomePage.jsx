import PageTransition from "@components/PageTransition/PageTransition";
import { useLazyComponent } from "@hooks/useLazyComponent";
import Loading from "@components/shared/Loading/Loading";
import { memo } from "preact/compat";

function HomePage() {

  const HomeSections = useLazyComponent(() => import("./HomeSections"));

  return (
    <div
      id="home-page">
      {HomeSections ? <HomeSections /> : <Loading />}
    </div>
  );
}
 
export default PageTransition(memo(HomePage));
