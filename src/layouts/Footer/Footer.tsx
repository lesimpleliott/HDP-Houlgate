import { useTranslation } from "react-i18next";
import languages from "../../assets/data/languages.json";
import ContactList from "../../components/ContactList";
import LogoHDP from "../../components/LogoHDP";
import Socials from "../../components/Socials";
import { capitalize } from "../../utils/capitalize";
import { toggleLanguage } from "../../utils/i18n";
import FooterList from "./FooterList";
import { informationsData, legalData, navigationData } from "./footerData";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-100 text-sm">
      <div className="max-w-custom mx-auto grid grid-cols-1 py-6 sm:grid-cols-4 lg:grid-cols-8">
        {/* LOGO */}
        <section className="py-4 sm:col-span-2 lg:order-1">
          <LogoHDP
            type="horizontal"
            className="mx-auto w-52 fill-primary-500"
          />
        </section>

        {/* CONTACT & SOCIALS */}
        <section className="flex flex-col items-center py-4 sm:col-span-2 lg:col-span-2">
          <div className="flex flex-col items-center gap-4">
            <ContactList
              icon={false}
              className="space-y-2 text-center leading-4 text-primary-500"
              textClass="w-full"
            />
            <Socials iconClass="w-10 sm:w-8" />
          </div>
        </section>

        {/* MENUS */}
        <section className="grid grid-cols-2 gap-y-4 border-t border-primary-200 py-4 sm:col-span-4 sm:grid-cols-4 lg:col-span-4 lg:border-x lg:border-t-0">
          <FooterList title={t("footer.navigation")} list={navigationData} />
          <FooterList
            title={t("footer.informations")}
            list={informationsData}
          />
          <FooterList title={t("footer.legal")} list={legalData} />
          <FooterList title={t("footer.language")}>
            <div className="space-y-2">
              {languages.map((language, index) => (
                <button
                  key={index}
                  className="flex items-center gap-2"
                  onClick={() => {
                    toggleLanguage(language.lang);
                  }}
                >
                  <img
                    src={language.icon}
                    alt={`icon ${language.lang}`}
                    className="w-6"
                  />
                  <p>{capitalize(t(language.text))}</p>
                </button>
              ))}
            </div>
          </FooterList>
        </section>
      </div>

      {/* Copyright */}
      <div className="w-full bg-primary-500 py-2">
        <p className="text-center text-xs font-medium italic text-white">
          © 2024 Hôtel de la Plage - Tous droits réservés
        </p>
      </div>
    </footer>
  );
};

export default Footer;
