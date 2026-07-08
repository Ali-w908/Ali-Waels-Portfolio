import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { PreloaderProvider } from "@/context/PreloaderContext";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Ali Wael | Portfolio",
  description: "Mechatronics Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <PreloaderProvider>
            <PageTransitionWrapper>
              {children}
            </PageTransitionWrapper>
          </PreloaderProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
