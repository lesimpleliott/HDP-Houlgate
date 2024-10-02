import socials from "../assets/data/socials.json";
type SocialDataType = {
  link: string;
  icon: string;
  alt: string;
};

type SocialsProps = {
  className?: string;
  iconSize?: string;
};

const Socials = ({ className, iconSize }: SocialsProps) => {
  return (
    <section className={`flex gap-4 ${className}`}>
      {socials.map((social: SocialDataType, index: number) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={social.icon} alt={social.alt} className={`${iconSize}`} />
        </a>
      ))}
    </section>
  );
};

export default Socials;
