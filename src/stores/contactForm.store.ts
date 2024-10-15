import { create } from "zustand";

type ContactFormState = {
  fieldValidity: {
    fullName: boolean;
    email: boolean;
    subject: boolean;
    message: boolean;
  };
  formIsValid: boolean;
  setFieldValidity: (name: string, isValid: boolean) => void;

  reset: boolean;
  setReset: (reset: boolean) => void;

  resetForm: () => void;
};

// Création du store Zustand
const useContactFormStore = create<ContactFormState>((set) => ({
  // Initialisation des champs du formulaire
  fieldValidity: {
    fullName: false,
    email: false,
    subject: false,
    message: false,
  },
  // Initialisation de la validité du formulaire
  formIsValid: false,

  // Méthode pour mettre à jour la validité d'un champ
  setFieldValidity: (name, isValid) => {
    set((state) => {
      const newFieldValidity = { ...state.fieldValidity, [name]: isValid };
      return {
        fieldValidity: newFieldValidity,
        formIsValid: Object.values(newFieldValidity).every(Boolean),
      };
    });
  },

  // Methode pour reinitialiser le formulaire
  reset: false,
  setReset: (reset) => {
    set({ reset });
  },

  resetForm: () => {
    set({
      fieldValidity: {
        fullName: false,
        email: false,
        subject: false,
        message: false,
      },
      formIsValid: false,
    });
  },
}));

export default useContactFormStore;
