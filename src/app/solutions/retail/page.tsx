'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CameraIcon, ShieldCheckIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Loss Prevention',
    description: 'Advanced AI surveillance for retail theft prevention and security.',
    icon: CameraIcon,
    benefits: [
      'Theft detection',
      'Suspicious behavior alerts',
      'Inventory tracking',
      'Real-time monitoring'
    ]
  },
  {
    title: 'Store Security',
    description: 'Comprehensive security solutions for retail environments.',
    icon: ShieldCheckIcon,
    benefits: [
      'Access control',
      'Staff safety',
      'Emergency response',
      'Perimeter security'
    ]
  },
  {
    title: 'Customer Analytics',
    description: 'Data-driven insights for retail optimization.',
    icon: ChartBarIcon,
    benefits: [
      'Traffic patterns',
      'Customer behavior',
      'Queue management',
      'Store layout optimization'
    ]
  }
];

export default function RetailSolutions() {
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
              <span className="text-gray-900">AI Solutions for</span>{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Retail
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your retail operations with AI-powered surveillance and analytics
              solutions designed to prevent losses and optimize store performance.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-3">
                {feature.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-red-600 mr-2"
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
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Showcase Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/ai-analysis.jpg"
                alt="Retail Analytics"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/solution-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/20"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl overflow-hidden">
            <div className="px-8 py-16 md:p-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto text-center"
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  Ready to Optimize Your Retail Security?
                </h2>
                <p className="text-white/90 mb-8">
                  Get in touch with our retail solutions experts to discover how we can help
                  protect your assets and improve store performance.
                </p>
                <Link
                  href="/demo"
                  className="inline-block bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
                >
                  Schedule a Demo
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 