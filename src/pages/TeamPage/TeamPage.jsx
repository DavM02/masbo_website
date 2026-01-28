import PageTransition from "@components/PageTransition/PageTransition" 
import TeamSections from "./TeamSections"

function TeamPage() {

  return (
    <div
      id='team-page'> 
      <TeamSections />
    </div>
  )
}

export default PageTransition(TeamPage)