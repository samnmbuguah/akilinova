import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About AkiliNova - Innovating Through AI Technology",
  description: "AkiliNova is a pioneering technology company that designs, develops, and deploys AI-Powered smart solutions. Learn about our mission to revolutionize businesses through innovative digital transformation.",
  keywords: [
    "about AkiliNova",
    "AI innovation",
    "technology company",
    "digital transformation",
    "smart solutions",
    "company mission",
    "tech innovation",
    "AI development"
  ]
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 