import contactData from "../assets/data/contact.json";
type contactDataType = {
  type: string;
  text: string;
  link: string;
  targetBlank: boolean;
};

const Contact = ({ className }: { className?: string }) => {
  return (
    <section className={`${className} space-y-2 leading-4`}>
      {contactData.map((contact: contactDataType, index: number) => (
        <a
          className="block hover:underline"
          key={index}
          href={contact.link}
          target={contact.targetBlank ? "_blank" : "_self"}
          rel={contact.targetBlank ? "noreferrer noopener" : undefined} // "noreferrer noopener" uniquement si target="_blank"
        >
          {contact.text}
        </a>
      ))}
    </section>
  );
};

export default Contact;
