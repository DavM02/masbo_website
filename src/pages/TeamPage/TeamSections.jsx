import TeamHeading from "@components/sections/TeanHeading/TeamHeading"
import Team from "@components/sections/Team/Team"
import JoinTeam from "@components/sections/JoinTeam/JoinTeam"
import JoinForm from "@components/sections/JoinForm/JoinForm"
 
function TeamSections() {
 
  return (
    <> 
      <TeamHeading />

      <Team />

      <JoinTeam />

      <JoinForm />
    </>
  )
}

export default TeamSections