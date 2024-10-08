/**
 * Ce composant correspondant à une section de l'app HDP Houlgate.
 * Elle peut etre utilisée pour afficher des informations ou des composants.
 * La couleur de fond peut être inversée en utilisant la propriété `reversedColor`.
 *
 * @param {string} className - Classes CSS supplémentaires pour le conteneur de la section.
 * @param {React.ReactNode} children - Contenu à afficher dans la section.
 * @param {boolean} [reversedColor=false] - Indique si la couleur de fond doit être inversée. Par défaut, cette valeur est `false`.
 *
 * @returns {JSX.Element} Le composant SectionHDP.
 */

import ReversedColorContext from "./ReversedColorContext"; // Importe le contexte

type SectionHDPProps = {
  children: React.ReactNode;
  className?: string;
  reversedColor?: boolean;
};

const SectionHDP = ({
  className,
  children,
  reversedColor = false, // Valeur par défaut à false
}: SectionHDPProps) => {
  return (
    <ReversedColorContext.Provider value={reversedColor}>
      <section
        className={`flex w-full flex-col items-center justify-center py-6 ${reversedColor ? "bg-primary-500" : "bg-transparent"}`}
      >
        <div className={`max-w-custom ${className}`}>{children}</div>
      </section>
    </ReversedColorContext.Provider>
  );
};

export default SectionHDP;
