import PageTransition from "@components/PageTransition/PageTransition"
import ServicesHeading from "@components/sections/ServicesHeading/ServicesHeading"
import Servcies from "@components/sections/Services/Services"
import ServicesDetails from "@components/sections/ServicesDetails/ServicesDetails"
import ServicesCases from "@components/sections/ServicesCases/ServicesCases"
import Reviews from "@components/sections/Reviews/Reviews"
 

function ServicesPage() {
 
  return (
    <div
      id='services-page'> 
 
      <ServicesHeading />

      <Servcies />

      <ServicesDetails />

      <ServicesCases />

      <Reviews />
    </div>
  )
}

export default PageTransition(ServicesPage)