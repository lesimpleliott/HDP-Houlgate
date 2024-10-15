import { useRef } from "react";
import { useTranslation } from "react-i18next";
import FormField from "./FormField";
import FormSubmitButton from "./FormSubmitButton";

const ContactForm = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form ref={formRef} className="flex w-full flex-col items-center gap-3">
      <FormField
        name="fullName"
        label={t("contact.form.name.label")}
        regex={/^[a-zA-Z\s\u00C0-\u017F-]{3,}$/} // Lettres, espaces, accents et tirets : 3 caractères minimum
        placeholder={t("contact.form.name.placeholder")}
        errorMessage={t("contact.form.name.errorMessage")}
        iconClass="fa-solid fa-user"
      />
      <FormField
        name="email"
        label={t("contact.form.email.label")}
        regex={/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/} // Email valide
        placeholder={t("contact.form.email.placeholder")}
        errorMessage={t("contact.form.email.errorMessage")}
        iconClass="fa-solid fa-envelope"
      />
      <FormField
        name="subject"
        label={t("contact.form.subject.label")}
        regex={/^.{5,}$/} // 5 caractères minimum
        placeholder={t("contact.form.subject.placeholder")}
        errorMessage={t("contact.form.subject.errorMessage")}
        iconClass="fa-solid fa-circle-info"
      />
      <FormField
        name="message"
        inputType="textarea"
        label={t("contact.form.message.label")}
        regex={/^(?=.{5,})([\s\S]*)$/} // 5 caractères minimum
        placeholder={t("contact.form.message.placeholder")}
        errorMessage={t("contact.form.message.errorMessage")}
      />

      <FormSubmitButton formRef={formRef} />
    </form>
  );
};

export default ContactForm;
