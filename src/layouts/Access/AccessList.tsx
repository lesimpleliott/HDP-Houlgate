import { useTranslation } from "react-i18next";

type AccessListProps = {
  icon: string;
  title: { [language: string]: string };
  text: { [language: string]: string };
};

const AccessList = ({ title, text, icon }: AccessListProps) => {
  const { i18n } = useTranslation();
  return (
    <li className="flex items-center gap-3">
      <i className={`${icon} w-8 text-center text-2xl`}></i>

      <div className="">
        <h3 className="font-medium">{title[i18n.language]}</h3>
        <p className="italic text-sm">{text[i18n.language]}</p>
      </div>
    </li>
  );
};

export default AccessList;
