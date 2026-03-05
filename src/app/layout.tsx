
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "OnlineDoc — Online Health Services | Coming Soon",
  description:
    "OnlineDoc is launching soon. Structured online consultation, diagnosis, referrals, and follow-up care. Join our WhatsApp channel for health tips.",
  keywords: ["online doctor", "telehealth", "health tips", "Kenya healthcare", "OnlineDoc"],
  authors: [{ name: "Eric Kantona" }],
  openGraph: {
    title: "OnlineDoc — Online Health Services",
    description: "Structured online consultation, diagnosis, referrals, and follow-up care. Launching soon.",
    url: "https://www.onlinedoc.co.ke",
    siteName: "OnlineDoc",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnlineDoc — Online Health Services",
    description: "Structured online consultation, diagnosis, referrals, and follow-up care. Launching soon.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="animated-bg min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
