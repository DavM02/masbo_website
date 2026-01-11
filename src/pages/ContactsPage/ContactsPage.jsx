
import PageTransition from "@components/PageTransition/PageTransition"
import JoinForm from "@components/sections/JoinForm/JoinForm"
import ContactiHeasing from "@components/sections/ContactsHeading/ContactsHeading"
import Contacts from "@components/sections/Contacts/Contacts"
import Map from "@components/sections/Map/Map"
 

 

function ContactsPage() {
 
  return (
    <div
      id='contacts-page'> 
      <ContactiHeasing />

      <Contacts />
 
      <JoinForm />
 

      <Map />

    </div>
  )
}

export default PageTransition(ContactsPage)