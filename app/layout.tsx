import type { Metadata } from "next";

// utils
import { SERVICES } from "./utils/Contants";
import { Providers } from "./providers";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// styles
import "./globals.css";

type Service = {
  code: string;
  icon: React.ElementType;
  title: string;
  desc: string;
};

export const metadata: Metadata = {
  title: "UPV RRC",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Providers>
          <Header SERVICES={SERVICES} />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}