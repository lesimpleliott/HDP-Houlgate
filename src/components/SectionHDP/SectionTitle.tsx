import { useContext } from "react";
import ReversedColorContext from "./ReversedColorContext";

type SectionTitleProps = {
  title: string;
  className?: string;
};

const SectionTitle = ({ title, className }: SectionTitleProps) => {
  const reversedColor = useContext(ReversedColorContext); // Récupère la valeur du contexte

  return (
    <h2
      className={`text-2xl font-medium ${reversedColor ? "text-white" : "text-textColor"} ${className}`}
    >
      {title}
      <div
        className={`mt-0.5 h-1 w-16 rounded-full ${reversedColor ? "bg-white/50" : "bg-primary-500"}`}
      />
    </h2>
  );
};

export default SectionTitle;
