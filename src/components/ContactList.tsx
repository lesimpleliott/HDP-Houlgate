/**
 * Composant ContactList qui affiche une liste de contacts avec des icônes optionnelles.
 * Les données des contacts sont stockées dans un fichier JSON : `/assets/data/contactAndSocials.json`.
 *
 * @param {string} props.className - La classe CSS à appliquer à la section.
 * @param {boolean} [props.icon=true] - Indique si les icônes doivent être affichées.
 * @param {string} props.iconClass - La classe CSS à appliquer aux icônes.
 * @param {string} props.textClass - La classe CSS à appliquer au texte des contacts.
 *
 * @returns {JSX.Element} - Un élément JSX représentant la liste de contacts.
 */

import data from "../assets/data/contactAndSocials.json";
import { ContactItemType } from "../types/ContactSocialsDataType";

type contactDataProps = {
  className?: string;
  icon?: boolean;
  iconClass?: string;
  textClass?: string;
};
const ContactList = ({
  className,
  icon = true,
  iconClass,
  textClass,
}: contactDataProps) => {
  const contactData: ContactItemType[] = data.contact;

  return (
    <section className={`${className}`}>
      {contactData.map((contact, index) => (
        <article key={index} className="flex gap-2">
          {icon && 
            <img
              src={contact.icon}
              className={`${iconClass}`}
            />
          }
          <a
            className={`${textClass} blockhover:underline`}
            href={contact.link}
            target={contact.targetBlank ? "_blank" : "_self"}
            rel={contact.targetBlank ? "noreferrer noopener" : undefined} // "noreferrer noopener" uniquement si target="_blank"
          >
            {contact.text}
          </a>
        </article>
      ))}
    </section>
  );
};

export default ContactList;
