import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agência Next.js",
  description: "Agência de viagens fictícia. Página criada para exercício de prática de Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
