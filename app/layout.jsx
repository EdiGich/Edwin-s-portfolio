import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import ChatBot from "@/components/chat/chat-bot";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

const BASE_URL = "https://edwingichira.dev";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Edwin Gichira | Full-Stack Developer in Mombasa, Kenya",
    template: "%s | Edwin Gichira",
  },
  description:
    "Edwin Gichira is a full-stack developer in Mombasa, Kenya, building AI-powered web and mobile solutions with Next.js, React, Flutter, Django and Tailwind CSS.",
  keywords: [
    "Edwin Gichira",
    "Full-Stack Developer",
    "Software Developer Kenya",
    "Next.js Developer",
    "Flutter Developer",
    "Web Developer Mombasa",
    "AI solutions",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Edwin Gichira | Full-Stack Developer",
    description:
      "Edwin Gichira is a full-stack developer in Mombasa, Kenya, building AI-powered web and mobile solutions with Next.js, React, Flutter, Django and Tailwind CSS.",
    url: BASE_URL,
    siteName: "Edwin Gichira",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${BASE_URL}/assets/profile.png`,
        width: 600,
        height: 600,
        alt: "Edwin Gichira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edwin Gichira | Full-Stack Developer",
    description:
      "Edwin Gichira is a full-stack developer in Mombasa, Kenya, building AI-powered web and mobile solutions.",
    images: [`${BASE_URL}/assets/profile.png`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Edwin Gichira",
      url: `${BASE_URL}/`,
      image: `${BASE_URL}/assets/profile.png`,
      jobTitle: "Full-Stack Developer",
      nationality: "Kenyan",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mombasa",
        addressCountry: "KE",
      },
      sameAs: [
        "https://github.com/EdiGich",
        "https://www.linkedin.com/in/edwin-gichira-9147a8213/",
      ],
      knowsAbout: [
        "Next.js",
        "React",
        "Flutter",
        "Django",
        "Tailwind CSS",
        "Node.js",
        "AI",
        "Web Development",
        "Mobile App Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: `${BASE_URL}/`,
      name: "Edwin Gichira | Full-Stack Developer",
      publisher: { "@id": `${BASE_URL}/#person` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <Header />
        <StairTransition />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <BackToTop />
        <ChatBot />
      </body>
    </html>
  );
}
