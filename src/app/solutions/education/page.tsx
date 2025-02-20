'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  VideoCameraIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const solutions = [
  {
    title: 'Campus Surveillance',
    description: 'Advanced AI-powered surveillance system for educational institutions with real-time monitoring and intelligent threat detection.',
    icon: VideoCameraIcon,
    features: [
      'Real-time monitoring',
      'Campus-wide coverage',
      'Threat detection',
      'Emergency response',
      'Remote surveillance',
      'Incident reporting'
    ]
  },
  {
    title: 'Access Security',
    description: 'Comprehensive access control system to secure campus facilities and monitor entry points.',
    icon: ShieldCheckIcon,
    features: [
      'Building access control',
      'Student ID integration',
      'Visitor management',
      'Emergency lockdown',
      'Access logs',
      'Multi-building control'
    ]
  },
  {
    title: 'Student Safety',
    description: 'Monitor and ensure student safety with intelligent tracking and analytics.',
    icon: UserGroupIcon,
    features: [
      'Student tracking',
      'Attendance monitoring',
      'Behavior analysis',
      'Emergency alerts',
      'Parent notifications',
      'Safety compliance'
    ]
  },
  {
    title: 'Campus Analytics',
    description: 'Gain valuable insights into campus operations and resource utilization.',
    icon: ChartBarIcon,
    features: [
      'Facility usage',
      'Resource allocation',
      'Traffic patterns',
      'Energy efficiency',
      'Maintenance tracking',
      'Performance reports'
    ]
  },
  {
    title: 'Learning Environment',
    description: 'Enhance the learning environment with smart monitoring and management.',
    icon: AcademicCapIcon,
    features: [
      'Classroom monitoring',
      'Environmental control',
      'Equipment tracking',
      'Space optimization',
      'Safety compliance',
      'Resource management'
    ]
  }
];

export default function EducationSolutions() {
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
                Education
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your educational institution with our AI-powered surveillance and analytics solutions.
              Enhance campus security, improve safety, and optimize facility operations.
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
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{solution.title}</h2>
              </div>
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
            Ready to Transform Your Campus Security?
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