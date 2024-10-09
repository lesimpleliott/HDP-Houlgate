import { useTranslation } from "react-i18next";
import ContactList from "../components/ContactList";
import SectionHDP from "../components/SectionHDP/SectionHDP";
import SectionTitle from "../components/SectionHDP/SectionTitle";
import { i18nParagraphs } from "../utils/i18nParagraphs";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <main className="mt-16">
      <SectionHDP className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* CONTACT */}
        <section className="flex flex-col gap-6">
          <SectionTitle title={t("contact.title")} />
          <div className="space-y-2">{i18nParagraphs("contact.paragraph")}</div>
          <ContactList
            className="flex flex-col gap-3"
            iconClass="w-5"
            textClass="font-medium hover:text-primary-500"
          />
          {/* <Socials iconClass="w-10 sm:w-8" className="" /> */}
        </section>

        {/* FORMULAIRE DE CONTACT */}
        <section className="h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d776.5914555089814!2d-0.0798474!3d49.3024707!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480a7ea24604b817%3A0xcf44bd8861fa4d0!2sHotel%20De%20La%20Plage!5e1!3m2!1sfr!2sfr!4v1728489164490!5m2!1sfr!2sfr"
            className="h-96 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </SectionHDP>
    </main>
  );
};

export default Contact;
