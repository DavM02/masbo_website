const steps = [
  {
    title: 'Research & Analysis',
    text: 'We analyze client needs and the project environment for accurate decision making.',
  },
  {
    title: 'Design & Planning',
    text: 'Our team crafts precise designs with client feedback and regulatory compliance.',
  },
  {
    title: 'Development',
    text: 'Execution phase with real-time problem solving and milestone tracking.',
  },
  {
    title: 'Delivery & Support',
    text: 'We deliver the project with full documentation and optional ongoing support.',
  },
]

export default function WorkingProcess() {
  return (
    <ul
      className="working-process row s-between gap-30 wrap">
      {steps.map((step, index) => (
        <li
          key={index}>
          <h2
            className="text-black">{`0${index + 1}.`}</h2>

          <span
            className="fs-14 font-bold text-black">{step.title}</span>

          <p
            className="to-middle text-gray capitalize">{step.text}</p>
        </li>
      ))}
    </ul>
  )
}
