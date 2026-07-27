import type { Metadata } from "next";
import { Josefin_Sans, Pontano_Sans } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const pontano = Pontano_Sans({
  subsets: ["latin"],
  variable: "--font-pontano",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Spravato® for Treatment-Resistant Depression | Etherios Therapy",
  description:
    "FDA-approved Spravato® (esketamine) for treatment-resistant depression in Orem, UT. Insurance accepted. Book a free consultation or submit an inquiry with Etherios Therapy.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Spravato Orem UT",
    "esketamine Utah",
    "treatment resistant depression",
    "Etherios Therapy",
    "ketamine nasal spray Utah County",
  ],
  openGraph: {
    title: "Spravato® for Treatment-Resistant Depression | Etherios Therapy",
    description:
      "FDA-approved Spravato® for adults with treatment-resistant depression. Calm, supervised care in Orem, UT — insurance accepted.",
    url: "https://www.etheriostherapy.com",
    siteName: "Etherios Therapy",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${josefin.variable} ${pontano.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
