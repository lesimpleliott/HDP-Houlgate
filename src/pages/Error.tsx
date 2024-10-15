import { useTranslation } from "react-i18next";
import CtaButton from "../components/CtaButton";

const Error = () => {
  const { t } = useTranslation();

  return (
    <main className="mt-16 max-h-[60vh] justify-center py-20">
      <div className="bg-[url('/photos/houlgate/bannerError.webp')] bg-cover bg-clip-text bg-right text-center">
        <h1 className="text-[clamp(2rem,30vw,16rem)] font-black leading-none text-transparent">
          OOPS!
        </h1>
        <h2 className="mb-6 text-[clamp(1.2rem,5vw,3rem)] font-bold text-transparent">
          {t("404.errorMessage")}
        </h2>
      </div>

      <CtaButton type="Navlink" to="/">
        {t("404.homeButton")}
      </CtaButton>
    </main>
  );
};

export default Error;
