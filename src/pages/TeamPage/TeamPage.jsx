import PageTransition from "@components/PageTransition/PageTransition";
import { useLazyComponent } from "@hooks/useLazyComponent";
import { memo } from "preact/compat";
import Loading from "@components/shared/Loading/Loading";

function TeamPage() {
  
  const TeamSections = useLazyComponent(() => import("./TeamSections"));

  return (
    <div
      id="team-page">
      {TeamSections ? <TeamSections /> : <Loading />}
    </div>
  );
}

export default PageTransition(memo(TeamPage));
