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

export const metadata = {
  title: "Edwin Gichira | Portfolio",
  description: "Software Developer Portfolio of Edwin Gichira",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <ScrollProgress />
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <BackToTop />
        <ChatBot />
      </body>
    </html>
  );
}
