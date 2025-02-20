import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Akilinova',
  description: 'Join our team at Akilinova and help shape the future of AI-powered surveillance technology.',
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 