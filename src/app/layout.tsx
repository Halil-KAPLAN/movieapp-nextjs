import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Tabs from "@/components/Tabs";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "MovieApp",
  description: "This is a MovieApp Example",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <Providers>
          <Header />
          <Suspense>
            <Tabs />
          </Suspense>
          {children}
        </Providers>
      </body>
    </html>
  );
}
