import React from "react";
import { Inter, Space_Mono as SpaceMono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";

import "./globals.css";
import { ProvideTheme } from "@/context/ProvideTheme";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const SpaceMonoFont = SpaceMono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-Space_Mono",
});

export const metadata: Metadata = {
  title: "Next Overflow",
  description:
    "A Stackoverflow Clone Powered with Generative AI to answer your questions",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          elements: {
            formButtonPrimary: "primary-gradient",
            footerActionLink: "text-gradient-primary hover:text-primary-500",
          },
        }}
      >
        <body className={`${inter.variable} ${SpaceMonoFont.variable}`}>
          <ProvideTheme>{children}</ProvideTheme>
        </body>
      </ClerkProvider>
    </html>
  );
}
