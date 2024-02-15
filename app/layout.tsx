import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "@/components/ThemeProvider";
export const metadata: Metadata = {
  title: "Keshi Emmanuel | Portfolio",
  description: "A software Engineer with passion for building cool things",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/*API for Lexend font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <body className={inter.className}>
        <div className="wrapper">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
