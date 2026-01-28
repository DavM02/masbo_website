import ServicesHeading from "@components/sections/ServicesHeading/ServicesHeading"
import Servcies from "@components/sections/Services/Services"
import ServicesDetails from "@components/sections/ServicesDetails/ServicesDetails"
import ServicesCases from "@components/sections/ServicesCases/ServicesCases"
import Reviews from "@components/sections/Reviews/Reviews"
 

function ServicesSections() {
 
  return (
    <> 
 
      <ServicesHeading />

      <Servcies />

      <ServicesDetails />

      <ServicesCases />

      <Reviews />
    </>
  )
}

export default ServicesSections