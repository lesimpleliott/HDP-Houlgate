import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

type CollapsedSectionProps = {
  minHeight: string;
  children: React.ReactNode;
  className?: string;
  button?: "gradient" | "flat";
};

const CollapsedSection = ({
  minHeight = "500px", // Hauteur min collapsee par defaut
  children,
  className,
  button = "gradient", // Type de bouton "flat" par defaut
}: CollapsedSectionProps) => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const [maxHeight, setMaxHeight] = useState(minHeight);
  const sectionRef = useRef<HTMLDivElement>(null);
  const flat = button === "flat";

  useEffect(() => {
    if (showAll && sectionRef.current) {
      setMaxHeight(`${sectionRef.current.scrollHeight}px`);
    } else {
      setMaxHeight(minHeight);
    }
  }, [showAll, minHeight]);

  return (
    <section
      ref={sectionRef}
      style={{ maxHeight }}
      className={`relative w-full overflow-hidden pb-12 transition-[max-height] duration-500 ease-in-out`}
    >
      {/* Contenu de la collapsedSection */}
      <div className={`max-w-custom ${className}`}>{children}</div>

      {/* Bouton Toggle Collapsed */}
      <button
        onClick={() => setShowAll(!showAll)}
        className={` group absolute bottom-0 w-full ${flat ? "h-12" : "pt-16"}`}
      >
        {/* Background */}
        <span
          className={`
            absolute inset-0 
            bg-gradient-to-t from-background  
            ${flat ? "to-background/15 from-80%" : "to-transparent from-40%"}
            transition-opacity duration-500 
            ${showAll ? "opacity-0" : "opacity-100"} 
        `}
        ></span>
        {/* Texte */}
        <span className="relative z-10 italic text-gray-400 transition-colors group-hover:text-primary-500">
          {showAll ? t("common.showLess") : t("common.showMore")}
          <i
            className={`fa-solid fa-chevron-down ml-2 transition-transform duration-300 ease-in-out ${showAll ? "rotate-180" : "rotate-0"}`}
          ></i>
        </span>
      </button>
    </section>
  );
};

export default CollapsedSection;
