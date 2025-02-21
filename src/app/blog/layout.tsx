import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog - AI Technology Insights | AkiliNova",
  description: "Stay updated with the latest insights in AI technology, smart solutions, and digital transformation. AkiliNova's blog covers innovation in automation, IoT systems, and enterprise solutions.",
  keywords: [
    "AI technology blog",
    "tech insights",
    "digital transformation",
    "IoT insights",
    "automation blog",
    "technology trends",
    "AI innovation",
    "smart solutions blog",
    "enterprise technology",
    "tech thought leadership"
  ]
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 