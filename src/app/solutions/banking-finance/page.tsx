'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  VideoCameraIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline';

const solutions = [
  {
    title: 'ATM Surveillance',
    description: 'Advanced AI-powered surveillance system for ATMs with real-time monitoring and fraud detection.',
    icon: VideoCameraIcon,
    features: [
      'Real-time monitoring',
      'Fraud detection',
      'Suspicious behavior alerts',
      'Emergency response',
      'Remote surveillance',
      'Incident reporting'
    ]
  },
  {
    title: 'Branch Security',
    description: 'Comprehensive security solutions to protect bank branches, staff, and customers.',
    icon: ShieldCheckIcon,
    features: [
      'Access control',
      'Visitor management',
      'Vault monitoring',
      'Asset protection',
      'Emergency protocols',
      'Security compliance'
    ]
  },
  {
    title: 'Customer Analytics',
    description: 'Gain insights into customer behavior and branch operations with advanced analytics.',
    icon: UserGroupIcon,
    features: [
      'Traffic analysis',
      'Queue management',
      'Service optimization',
      'Customer patterns',
      'Peak hour tracking',
      'Performance metrics'
    ]
  },
  {
    title: 'Operations Analytics',
    description: 'Improve operational efficiency with data-driven insights and monitoring.',
    icon: ChartBarIcon,
    features: [
      'Resource utilization',
      'Staff efficiency',
      'Transaction monitoring',
      'Equipment tracking',
      'Capacity planning',
      'Performance reporting'
    ]
  },
  {
    title: 'Transaction Security',
    description: 'Enhanced security measures for financial transactions and sensitive operations.',
    icon: BanknotesIcon,
    features: [
      'Transaction monitoring',
      'Fraud prevention',
      'Identity verification',
      'Secure processing',
      'Audit trails',
      'Compliance tracking'
    ]
  }
];

export default function BankingFinanceSolutions() {
  return (
    <div className="min-h-screen bg-gray-100">
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
              <span className="text-gray-900">AI Solutions for</span>{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Banking & Finance
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your financial institution with our AI-powered surveillance and analytics solutions.
              Enhance security, improve customer service, and optimize branch operations.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6">
                <solution.icon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-black mb-4">{solution.title}</h2>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <div className="grid grid-cols-1 gap-3">
                {solution.features.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-red-600 mr-2 flex-shrink-0"
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
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-red-600 to-red-700 hover:shadow-lg transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Banking Security?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with our team to learn how our AI-powered solutions can enhance your security infrastructure and improve operational efficiency.
          </p>
          <div className="flex justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-red-600 transition-all duration-200"
            >
              Request Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 