import data from "../assets/data/contactAndSocials.json";
import { SocialItemType } from "../types/ContactSocialsDataType";

type SocialsProps = {
  className?: string;
  iconClass: string;
};

const Socials = ({ className, iconClass }: SocialsProps) => {
  const socials: SocialItemType[] = data.socials;

  return (
    <section className={`flex gap-4 ${className}`}>
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={social.icon} alt={social.alt} className={`${iconClass}`} />
        </a>
      ))}
    </section>
  );
};

export default Socials;
