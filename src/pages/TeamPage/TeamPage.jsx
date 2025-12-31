import PageTransition from "@components/PageTransition/PageTransition" 
import TeamHeading from "@components/sections/TeanHeading/TeamHeading"
import Team from "@components/sections/Team/Team"
import JoinTeam from "@components/sections/JoinTeam/JoinTeam"
import JoinForm from "@components/sections/JoinForm/JoinForm"

function TeamPage() {
 
  return (
    <div
      id='team-page'> 
      <TeamHeading />

      <Team />

      <JoinTeam />

      <JoinForm/>
    </div>
  )
}

export default PageTransition(TeamPage)