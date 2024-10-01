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
