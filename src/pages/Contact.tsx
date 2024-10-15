import { useTranslation } from "react-i18next";
import ContactList from "../components/ContactList";
import SectionHDP from "../components/SectionHDP/SectionHDP";
import SectionTitle from "../components/SectionHDP/SectionTitle";
import Access from "../layouts/Access/Access";
import ContactForm from "../layouts/ContactForm/ContactForm";
import { i18nParagraphs } from "../utils/i18nParagraphs";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <main className="mt-16 flex flex-col gap-10">
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

        {/* FORMULAIRE */}
        <ContactForm />
      </SectionHDP>

      {/* ACCES */}
      <Access />
    </main>
  );
};

export default Contact;
