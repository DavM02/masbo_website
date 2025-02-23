import img1 from "@assets/team/team-circle.jpg";
import img2 from "@assets/team/team-circle-1.jpg";
import img3 from "@assets/team/team-circle-2.jpg";
import img4 from "@assets/team/team-circle-3.jpg";
import img5 from "@assets/team/team-circle-4.jpg";
import MainButton from "@components/ui/buttons/MainButton";
import useAnimation from "@hooks/useAnimation";
import { gsap } from "gsap";
import { useRef } from "preact/hooks";

export default function Team() {
  const titleRef = useRef(null);
  const images = [ img1,
    img2,
    img3,
    img4,
    img5 ];
  const titleText = "Meeting our team".split("").map((letter, i) => (
    <span
      key={i}>{letter === " " ? "\u00A0" : letter}</span>
  ));

  useAnimation((options) => {
    const items = gsap.utils.toArray(".team li");
    const spans = titleRef.current.querySelectorAll("span");

    gsap.set(spans, { opacity: 0, y: 20 });
    gsap.to(spans, {
      opacity: 1,
      y: 0,
      duration: 3,
      stagger: 0.05,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".team",
        start: "top 30%",
        toggleActions: "play none none none",
        ...options,
        // invalidateOnRefresh: true,
      },
    });

    gsap.set(items, { opacity: 0, y: 20 });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 3,
      stagger: 0.1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".team",
        start: "top 90%",
        toggleActions: "play none none none",
        ...options,
        // invalidateOnRefresh: true,
      },
    });
  });

  return (
    <section
      className="team">
      <div
        className="container full-height">
        <div
          className="column center-y center-x gap-25 full-height">
          <span
            className="fs-14 text-white text-center up-case">
            confidently to bring idea to life.
          </span>

          <h1
            ref={titleRef}>{titleText}</h1>

          <ul
            className="row">
            {images.map((el, i) => (
              <li
                key={i}>
                <img
                  src={el}
                  alt={`team-img-${i + 1}`} />
              </li>
            ))}
          </ul>

          <p
            className="to-middle text-white text-center capitalize">
            MasBo is an architectural group working in the field of architecture and urban planning. The company was founded in 2006. We offer a full range of services from interior design, individual cottages to the design and construction of
            residential complexes.
          </p>

          <MainButton
            arrow={true}>Let’s work together</MainButton>
        </div>
      </div>
    </section>
  );
}
