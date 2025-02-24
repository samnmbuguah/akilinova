import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrammarlyCleanup from "@/components/GrammarlyCleanup";
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://akilinova.com'),
  title: {
    default: "AkiliNova - AI-Powered Smart Technology Solutions",
    template: "%s | AkiliNova"
  },
  description: "AkiliNova designs, develops, and deploys AI-Powered smart technology solutions, revolutionizing businesses through AI-driven automation, web solutions, and IoT systems. Founded to push the boundaries of innovation, we deliver cutting-edge digital solutions for enterprises looking to scale efficiently.",
  keywords: [
    "AI solutions",
    "smart technology",
    "IoT systems",
    "business automation",
    "web solutions",
    "digital transformation",
    "enterprise solutions",
    "artificial intelligence",
    "machine learning",
    "surveillance systems"
  ],
  authors: [{ name: "AkiliNova" }],
  creator: "AkiliNova",
  publisher: "AkiliNova",
  icons: {
    icon: [
      {
        url: "/favicon_io/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon_io/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon_io/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      }
    ],
    apple: {
      url: "/favicon_io/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    other: [
      {
        rel: "manifest",
        url: "/favicon_io/site.webmanifest",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "YOUR_WEBSITE_URL",
    siteName: "AkiliNova",
    title: "AkiliNova - AI-Powered Smart Technology Solutions",
    description: "Revolutionizing businesses through AI-driven automation, web solutions, and IoT systems.",
    images: [
      {
        url: "URL_TO_IMAGE",
        width: 1200,
        height: 630,
        alt: "AkiliNova - Smart Technology Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AkiliNova - AI-Powered Smart Technology Solutions",
    description: "Revolutionizing businesses through AI-driven automation, web solutions, and IoT systems.",
    images: ["URL_TO_IMAGE"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className} suppressHydrationWarning>
        <GrammarlyCleanup />
        <Navbar />
        <GoogleAnalytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}
