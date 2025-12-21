const advantages = [
  {
    title: 'Client-Centered Approach',
    text: 'We tailor our services to fit each client’s unique vision and constraints.',
  },
  {
    title: 'Experienced Team',
    text: 'Decades of combined experience in architecture, engineering, and design.',
  },
  {
    title: 'Cutting-Edge Tools',
    text: 'We utilize the latest technologies and software for optimal results.',
  },
  {
    title: 'Reliable Deadlines',
    text: 'Timely project delivery with transparent timelines and milestones.',
  },
]

export default function Advantages() {
  return (
    <ul
      className="advantages row s-between gap-30 wrap">
      {advantages.map((adv, index) => (
        <li
          key={index}>
          <h2
            className="text-black">{`0${index + 1}.`}</h2>

          <span
            className="fs-14 font-bold text-black">{adv.title}</span>

          <p
            className="to-middle text-gray capitalize">{adv.text}</p>
        </li>
      ))}
    </ul>
  )
}
