import PageTransition from "@components/PageTransition/PageTransition";
import { useLazyComponent } from "@hooks/useLazyComponent";
import { memo } from "preact/compat";
import Loading from "@components/shared/Loading/Loading";

function ServicesPage() {
   
  const ServicesSections = useLazyComponent(() => import("./ServicesSections"));

  return (
    <div
      id="services-page">
      {ServicesSections ? <ServicesSections /> : <Loading />}
    </div>
  );
}

export default PageTransition(memo(ServicesPage));
