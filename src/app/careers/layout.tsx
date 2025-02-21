import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Careers at AkiliNova - Join Our Innovation Team",
  description: "Join AkiliNova in revolutionizing businesses through AI-driven innovation. We're looking for talented individuals passionate about AI, automation, and smart technology solutions.",
  keywords: [
    "tech careers",
    "AI jobs",
    "technology jobs",
    "software development",
    "IoT careers",
    "AI development",
    "tech innovation",
    "career opportunities",
    "AkiliNova jobs",
    "technology careers"
  ]
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 