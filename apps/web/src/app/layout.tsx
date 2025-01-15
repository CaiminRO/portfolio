import type { Metadata } from "next";
import "@/styles/globals.css";
import { ReactNode } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Personal } from "@/config";
import CookieBanner from "@/components/common/CookieBanner";
import { GoogleAnalytics } from "@next/third-parties/google";

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
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}/>}

      <body className={`flex min-h-screen flex-col antialiased`}>
        <Header />

        <main className="flex-grow pt-16">{children}</main>

        <Footer />

        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && <CookieBanner />}
      </body>
    </html>
  );
}
