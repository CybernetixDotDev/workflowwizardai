import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CookieDisclaimer } from "@/components/CookieDisclaimer";
import { siteUrl } from "@/lib/site";
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
  metadataBase: new URL(siteUrl),
  title: {
    default: "Workflow Wizard AI | Practical AI Automation",
    template: "%s | Workflow Wizard AI",
  },
  description:
    "Simple AI tips, tools, and automations for small business owners who want to save time without complexity.",
  applicationName: "Workflow Wizard AI",
  keywords: [
    "AI automation",
    "small business AI",
    "AI tools",
    "workflow automation",
    "business productivity",
  ],
  openGraph: {
    type: "website",
    siteName: "Workflow Wizard AI",
    title: "Workflow Wizard AI | Practical AI Automation",
    description:
      "Simple AI tools, practical automations, and clear guidance for small business owners.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workflow Wizard AI | Practical AI Automation",
    description:
      "Simple AI tools, practical automations, and clear guidance for small business owners.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "impact-site-verification": "59258b40-e167-4f2b-92f3-0194cf27b212",
  },
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
