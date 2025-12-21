import SectionHeader from "@components/shared/SectionHeader/SectionHeader";

export default function Team() {
  return (
    <section
      id="team">
      <div
        className="container">
        <SectionHeader
          headline="Our team"
          num={3} />

        <h3
          className="text-gray capitalize">leadership team</h3>
      </div>
    </section>
  )
}
