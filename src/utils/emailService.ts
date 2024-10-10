import emailjs from "@emailjs/browser";

export const sendEmail = (form: HTMLFormElement) => {
  return emailjs.sendForm(
    import.meta.env.VITE_SERVICE,
    import.meta.env.VITE_TEMPLATE,
    form,
    { publicKey: import.meta.env.VITE_ID },
  );
};
