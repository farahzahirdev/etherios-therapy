import type { Metadata } from "next";
import Script from "next/script";
import { Josefin_Sans, Pontano_Sans } from "next/font/google";
import { site } from "@/content/site";
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
      <head>
        <link rel="preconnect" href={site.ghl.origin} />
        <link rel="prefetch" href={site.ghl.calendar.src} />
      </head>
      <body className={`${josefin.variable} ${pontano.variable} font-body`}>
        {children}
        {/*
          GHL's embed script resizes booking/form iframes via postMessage. If the
          listener isn't attached before the widget reports height, the iframe can
          stay blank on first mobile load until refresh. afterInteractive registers
          early — unlike lazyOnload, which often loses that race.
        */}
        <Script src={site.ghl.embedScriptSrc} strategy="afterInteractive" />
      </body>
    </html>
  );
}
