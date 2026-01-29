import { socialLinks } from "@components/shared/Socials/SocialLinks";

export const SocialList = () => (
  <ul>
    {socialLinks.map(({ href, icon: Icon, label }) => (
      <li
        key={label}
        className="row center-y gap-15">
        <a
          href={href}
          aria-label={label}>
          <Icon />
        </a>

        <h4>{label}</h4>
      </li>
    ))}
  </ul>
);
