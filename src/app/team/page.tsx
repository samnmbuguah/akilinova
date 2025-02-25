import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | Akilinova',
  description: 'Meet the talented team behind Akilinova - leaders in AI-powered surveillance solutions.',
};

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();
};

const teamMembers = [
  {
    name: 'Derrick Ngari',
    role: 'Founder & Business Development',
  },
  {
    name: 'Emmanuel Barasa',
    role: 'Founder & Software Development',
  },
  {
    name: 'Samuel Mbugua',
    role: 'Software Engineer',
  },
  {
    name: 'Brian Cheruiyot',
    role: 'Software Engineer',
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re a team of passionate experts dedicated to revolutionizing surveillance technology through artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 w-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center">
                <span className="text-5xl font-bold text-white">
                  {getInitials(member.name)}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-red-600 font-medium mb-3">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 mb-16 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Join Our Team</h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            We&apos;re always looking for talented individuals who are passionate about AI and innovation.
            Check out our careers page for current opportunities.
          </p>
          <div className="text-center">
            <a
              href="/careers"
              className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 