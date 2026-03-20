import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alec Webber | AI Deployments at Cursor",
  description: "Personal portfolio of Alec Webber - helping ship reliable AI experiences at Cursor. Showcasing projects, thoughts, and creative work.",
  keywords: ["Alec Webber", "AI", "Cursor", "Portfolio", "Deployments"],
  authors: [{ name: "Alec Webber" }],
  creator: "Alec Webber",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alecwebber.com",
    title: "Alec Webber | AI Deployments at Cursor",
    description: "Personal portfolio of Alec Webber - helping ship reliable AI experiences at Cursor.",
    siteName: "Alec Webber",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alec Webber | AI Deployment at Cursor",
    description: "Personal portfolio of Alec Webber - helping ship reliable AI experiences at Cursor.",
    creator: "@aleccwebber",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
