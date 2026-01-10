import './categories.scss';

export default function Categories({
  items,
  active,
  onChange
}) {
  return (
    <ul
      className={'categories row s-between wrap gap-30'}>
      {items.map(item => (
        <li
          key={item}
          className={`row center-y ${active === item ? 'active' : 'inactive'}`}
          onClick={() => onChange(item)}>
          <div
            className="dot"></div>

          <h3
            className="text-gray capitalize">{item}</h3>
        </li>
      ))}
    </ul>
  );
}
