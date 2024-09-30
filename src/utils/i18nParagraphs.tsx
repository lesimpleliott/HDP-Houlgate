/**
 * Utilitaire pour générer des paragraphes traduits à partir d'une clé i18next.
 * Il peut être utilisé de deux manières :
 * 1/ Avec uniquement la clé i18n (string) :
 *    - i18nParagraphs("home_paragraph")
 *    - Génère des paragraphes basés sur la clé fournie.
 *
 * 2/ Avec la clé i18n et un `className` (facultatif) pour styler les paragraphes :
 *    - i18nParagraphs({ i18nKey: "home_paragraph", className: "text-red-500" })
 *    - Le `className` est appliqué à chaque paragraphe généré.
 * 
 * @param input : string | i18nParagraphsProps
 *    - Si c'est une chaîne (string), seule la clé i18n est fournie.
 *    - Si c'est un objet (i18nParagraphsProps), on passe la clé `i18nKey` et optionnellement un `className`.
 * @returns Un tableau d'éléments <p> contenant les paragraphes traduits avec la clé fournie.
 */

import { t } from "i18next";
import { Trans } from "react-i18next";

type i18nParagraphsProps = {
  i18nKey: string;
  className?: string;
};

export const i18nParagraphs = (input: string | i18nParagraphsProps) => {
  // Vérifie si l'argument est un objet ou une simple chaîne
  const isObject = typeof input === "object" && !Array.isArray(input);

  // Si c'est un objet, on récupère `i18nKey` et `className`
  const i18nKey = isObject ? input.i18nKey : input;
  const className = isObject && input.className ? input.className : "";

  const paragraphsArray = t(i18nKey, {
    returnObjects: true,
  }) as string[];

  return paragraphsArray.map((index) => (
    <p key={index} className={className}>
      <Trans
        i18nKey={index}
        components={{ strong: <strong />, nbsp: <>&nbsp;</> }}
      />
    </p>
  ));
};
