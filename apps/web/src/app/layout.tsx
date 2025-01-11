import type { Metadata } from "next";
import "@/styles/globals.css";
import { ReactNode } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Personal } from "@/config";

export const metadata: Metadata = {
  title: "CaiminRO | Portfolio",
  description: `Project and video game mod portfolio for ${Personal.FullName}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex min-h-screen flex-col antialiased`}>
        <Header />

        <main className="flex-grow pt-16">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
