import PageTransition from "@components/PageTransition/PageTransition";
import { useLazyComponent } from "@hooks/useLazyComponent";
import Loading from "@components/shared/Loading/Loading";
import { memo } from "preact/compat";

function ContactsPage() {
  const ContactsSections = useLazyComponent(() => import("./ContactsSections"));

  return (
    <div
      id="contacts-page">
      {ContactsSections ? <ContactsSections /> : <Loading />}
    </div>
  );
}

 

export default PageTransition(memo(ContactsPage));
