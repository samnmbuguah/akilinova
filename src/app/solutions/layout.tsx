import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI-Powered Solutions | AkiliNova",
  description: "Discover AkiliNova's comprehensive suite of AI-powered solutions for surveillance, automation, and IoT systems. Our cutting-edge technology helps enterprises scale efficiently through digital transformation.",
  keywords: [
    "AI solutions",
    "enterprise automation",
    "IoT systems",
    "smart surveillance",
    "business intelligence",
    "digital transformation",
    "AI technology",
    "smart solutions"
  ]
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 