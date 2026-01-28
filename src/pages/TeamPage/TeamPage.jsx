import PageTransition from "@components/PageTransition/PageTransition";
import { useState, useEffect } from "preact/hooks";
import Loading from "@components/shared/Loading/Loading";

function TeamPage() {
  const [ TeamSections, setTeamSections ] = useState(null);

  useEffect(() => {
    import("./TeamSections").then(module => {
      setTeamSections(() => module.default);
    });
  }, []);

  return (
    <div
      id="team-page">
      {TeamSections ? <TeamSections /> : <Loading />}
    </div>
  );
}

export default PageTransition(TeamPage);
