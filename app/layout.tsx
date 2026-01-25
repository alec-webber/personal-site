import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alec Webber | Senior Product Manager",
  description: "Personal portfolio of Alec Webber - Senior Product Manager at Workday. Showcasing projects, thoughts, and creative work.",
  keywords: ["Alec Webber", "Product Manager", "Workday", "Portfolio"],
  authors: [{ name: "Alec Webber" }],
  creator: "Alec Webber",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alecwebber.com",
    title: "Alec Webber | Senior Product Manager",
    description: "Personal portfolio of Alec Webber - Senior Product Manager at Workday.",
    siteName: "Alec Webber",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alec Webber | Senior Product Manager",
    description: "Personal portfolio of Alec Webber - Senior Product Manager at Workday.",
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
