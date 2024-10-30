import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hôtel de la Plage - Houlgate",
  description: "Page d'accueil de l'Hôtel de la Plage à Houlgate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-black">{children}</body>
    </html>
  );
}
