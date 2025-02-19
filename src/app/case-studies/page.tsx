'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const caseStudies = [
  {
    title: 'Enterprise Security Transformation',
    client: 'TechCorp International',
    industry: 'Technology',
    challenge: 'Needed to upgrade outdated security infrastructure across 50+ locations.',
    solution: 'Implemented AI-powered surveillance system with centralized monitoring.',
    results: [
      '60% reduction in security incidents',
      '40% decrease in operational costs',
      'Real-time threat detection across all locations',
      'Improved response time by 75%'
    ],
    image: '/enterprise-security.jpg'
  },
  {
    title: 'Retail Chain Automation',
    client: 'GlobalMart Retail',
    industry: 'Retail',
    challenge: 'Required efficient customer service solution for 100+ stores.',
    solution: 'Deployed AI chatbots integrated with inventory and CRM systems.',
    results: [
      '85% customer queries resolved automatically',
      '30% increase in customer satisfaction',
      '50% reduction in support staff costs',
      '24/7 customer support availability'
    ],
    image: '/retail-security.jpg'
  },
  {
    title: 'Smart City Security',
    client: 'Metropolitan Council',
    industry: 'Government',
    challenge: 'Needed comprehensive security solution for public spaces.',
    solution: 'Implemented city-wide AI surveillance with predictive analytics.',
    results: [
      '45% reduction in crime rates',
      'Real-time incident response',
      'Improved public safety metrics',
      'Efficient resource allocation'
    ],
    image: '/smart-city.jpg'
  }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Client</span>{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our AI solutions have transformed businesses and organizations
              across different industries.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-[300px] md:h-auto">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{study.title}</h2>
                  <p className="text-gray-600 font-semibold mb-4">{study.client}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Challenge</h3>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Solution</h3>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/demo"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-red-600 to-red-700 hover:shadow-lg transition-all duration-200"
                    >
                      View Full Case Study
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 