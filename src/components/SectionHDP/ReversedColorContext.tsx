import { createContext } from "react";

// Crée le contexte, avec une valeur par défaut (false)
const ReversedColorContext = createContext(false);

export default ReversedColorContext;

// Explications:
// Pour passer la valeur du contexte à un composant enfant, il faut utiliser le Provider
// dans notre cas, on utilise le composant SectionHDP pour passer la valeur du contexte
// <ReversedColorContext.Provider value={reversedColor}>
//   <Component />
// </ReversedColorContext.Provider>
//
// Pour récupérer la valeur du contexte dans un composant enfant, il faut utiliser le hook useContext
// dans notre cas, on utilise le composant SectionTitle pour récupérer la valeur du contexte
// const reversedColor = useContext(ReversedColorContext);
