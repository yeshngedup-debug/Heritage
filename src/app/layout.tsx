import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display, Cinzel } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Phudro Goenpa | Sacred Heritage of Bhutan",
    template: "%s | Phudro Goenpa",
  },
  description:
    "Discover Phudro Goenpa, an ancient Bhutanese Buddhist monastery perched on a limestone mountain ridge in the Paro Valley. Explore its history, legends, and spiritual significance.",
  keywords: [
    "Phudro Goenpa",
    "Bhutan monastery",
    "Bhutanese Buddhism",
    "Paro Valley",
    "Himalayan heritage",
    "Buddhist pilgrimage",
    "sacred sites Bhutan",
    "Phudro",
    "Goenpa",
  ],
  authors: [{ name: "Phudro Goenpa Heritage" }],
  openGraph: {
    title: "Phudro Goenpa | Sacred Heritage of Bhutan",
    description:
      "Discover Phudro Goenpa, an ancient Bhutanese Buddhist monastery perched on a limestone mountain ridge in the Paro Valley.",
    url: "https://phudrogoenpa.heritage",
    siteName: "Phudro Goenpa Heritage",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phudro Goenpa | Sacred Heritage of Bhutan",
    description:
      "An ancient Bhutanese Buddhist monastery on a limestone ridge in the Paro Valley.",
  },
  icons: {
    icon: "/logo.svg",
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${cinzel.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
