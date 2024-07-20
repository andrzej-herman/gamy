import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { plPL } from "@clerk/localizations";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

// test

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gamy i pasaże",
  description: "Generated by create next app",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icon.png",
        href: "/icon.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icon.png",
        href: "/icon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      localization={plPL}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
      signInForceRedirectUrl="/choice"
      signUpForceRedirectUrl="/choice"
    >
      <html lang="pl">
        <body className={inter.className}>
          <main className="bg-yellow-100 md:h-screen">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
