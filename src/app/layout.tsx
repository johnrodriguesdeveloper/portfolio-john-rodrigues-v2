import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/Header";
import Nav from "@/components/Nav";
import ParticlesContainer from "@/components/ParticlesContainer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Rodrigues",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="flex flex-col relative">
            <ParticlesContainer />
            <Nav />
            <Header />
            <main className="flex-1 flex items-center justify-center px-4">
              <div className="w-full max-w-5xl mx-auto">{children}</div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
