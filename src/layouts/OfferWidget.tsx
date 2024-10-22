import { useState } from "react";

const OfferWidget = () => {
  const [offerOpen, setOfferOpen] = useState(false);

  return (
    <aside
      className={`fixed bottom-10 right-0 z-50 flex transition-transform duration-500 ${offerOpen ? "translate-x-0" : "translate-x-96"}`}
    >
      <button
        className="h-12 w-12 rounded-s-2xl bg-accent text-2xl text-white shadow-lg"
        onClick={() => setOfferOpen(!offerOpen)}
      >
        {offerOpen ? (
          <i className="fas fa-close -rotate-90 transition-transform ease-in-out"></i>
        ) : (
          <i className="fas fa-tag rotate-0 transition-transform ease-in-out"></i>
        )}
      </button>

      <section className="flex min-h-64 w-96 flex-col gap-3 overflow-hidden rounded-bl-xl bg-background pt-4 shadow-2xl">
        <h2 className="px-4 text-center text-lg font-semibold text-primary-500">
          Offre privilège
        </h2>
        <div className="flex-1 px-4 pb-4">
          <p>Profitez de notre offre spéciale pour votre séjour</p>
          <p>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Magnam obcaecati molestiae reiciendis
            laboriosam nobis, sint eius porro. Excepturi ullam labore quo ex
            numquam eveniet eaque blanditiis nihil officiis porro debitis sed
            suscipit iure quas, exercitationem sapiente? Ad at quas facere.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            repellat deserunt sint sequi. Iusto enim, voluptates maiores aperiam
            reiciendis fuga. adipisicing elit. Cum impedit, error nemo dolorem
            corrupti tempore ipsa exercitationem iste quo, repellat excepturi
            aperiam, assumenda neque culpa aspernatur aliquam beatae velit quia?
          </p>
        </div>
        <button className="bg-accent py-2 font-semibold text-white hover:bg-accent/90">
          Voir l'offre
        </button>
      </section>
    </aside>
  );
};

export default OfferWidget;
