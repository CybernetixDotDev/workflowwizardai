import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CookieDisclaimer } from "@/components/CookieDisclaimer";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Workflow Wizard AI | Making AI Automations Feel Like Magic",
  description:
    "Simple AI tips, tools, and automations for small business owners who want to save time without complexity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CookieDisclaimer />
        <Analytics />
      </body>
    </html>
  );
}
