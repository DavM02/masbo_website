import TextLineAnimation from "@components/shared/TextLineAnimation/TextLineAnimation";
export default function GoalsIntro() {
 

  const lines = [
    "MasBo is an architectural studio",
    "specializing in urban planning",
    "and contemporary design.",
  ];

 

  return (
    <div>
      <TextLineAnimation
        lines={lines} />

      <p
        className="static text-gray capitalize">
        We offer innovative engineering solutions that ensure the successful achievement of the client's goals.
        Because engineering is a result-oriented strategy in action. An individual approach and
        attention to detail in the development of engineering systems allows us to obtain reliable,
        verified solutions. Simply put, we think over the operation of facilities based on practical
        experience and scientific knowledge.
      </p>
    </div>
  );
}
