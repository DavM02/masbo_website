import PageTransition from "@components/PageTransition/PageTransition" 
import TeamHeading from "@components/sections/TeanHeading/TeamHeading"
import Team from "@components/sections/Team/Team"

function TeamPage() {
 
  return (
    <div
      id='team-page'> 
      <TeamHeading />

      <Team />
    </div>
  )
}

export default PageTransition(TeamPage)