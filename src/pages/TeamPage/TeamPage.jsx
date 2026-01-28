// import PageTransition from "@components/PageTransition/PageTransition" 
// import Loading from "@components/shared/Loading/Loading";

// import { lazy, Suspense } from "preact/compat"
// import { LazyLoadComponent } from "react-lazy-load-image-component";
// const TeamSections = lazy(() => import("./TeamSections"));

// function TeamPage() {

//   return (
//     <div
//       id='team-page'> 
//       <Suspense
        
//         fallback={    <Loading />}>
//         <TeamSections />
//       </Suspense>
  
//     </div>
//   )
// }

// export default PageTransition(TeamPage)


// TeamPage.jsx
import PageTransition from "@components/PageTransition/PageTransition";
import loadable from "@loadable/component";
// import Loading from "@components/shared/Loading/Loading";

// ленивый импорт секций
const TeamSections = loadable(() => import("./TeamSections"));

function TeamPage() {
  return (
    <div
      id="team-page">
      <TeamSections />
    </div>
  );
}

export default PageTransition(TeamPage);
