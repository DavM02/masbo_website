
import JoinForm from "@components/sections/JoinForm/JoinForm"
import ContactiHeasing from "@components/sections/ContactsHeading/ContactsHeading"
import Contacts from "@components/sections/Contacts/Contacts"
import Map from "@components/sections/Map/Map"
 
function ContactsSections() {
 
  return (
    <> 
      <ContactiHeasing />

      <Contacts />
 
      <JoinForm />
 
      <Map />

    </>
  )
}

export default ContactsSections