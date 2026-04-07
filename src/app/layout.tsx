import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "Empresa";
const companyDomain = process.env.NEXT_PUBLIC_COMPANY_DOMAIN || "exemplo.com";
const companyDescription =
  process.env.NEXT_PUBLIC_COMPANY_DESCRIPTION ||
  "Soluções em comunicação empresarial";

export const metadata: Metadata = {
  title: `${companyName} — ${companyDescription}`,
  description: `${companyName}: ${companyDescription}. Acesse ${companyDomain} para saber mais.`,
  openGraph: {
    title: companyName,
    description: companyDescription,
    url: `https://${companyDomain}`,
    siteName: companyName,
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
