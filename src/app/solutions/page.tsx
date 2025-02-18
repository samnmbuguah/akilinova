'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CameraIcon, 
  ChartBarIcon, 
  ShieldCheckIcon,
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const solutions = [
  {
    title: 'AI Surveillance',
    description: 'Advanced security monitoring with real-time threat detection and intelligent analytics.',
    icon: CameraIcon,
    video: '/videos/solution-video.mp4',
    features: [
      'Real-time monitoring',
      'Threat detection',
      'Motion tracking',
      'Facial recognition',
      'Object detection',
      'Incident reporting'
    ]
  },
  {
    title: 'AI Chatbots',
    description: 'Intelligent conversational agents that provide 24/7 customer support and assistance.',
    icon: ChatBubbleBottomCenterTextIcon,
    image: '/ai-analysis.jpg',
    features: [
      'Natural language processing',
      '24/7 availability',
      'Multi-language support',
      'Custom responses',
      'Integration capabilities',
      'Analytics dashboard'
    ]
  },
  {
    title: 'Analytics Platform',
    description: 'Comprehensive data analysis and reporting platform for security insights.',
    icon: ChartBarIcon,
    image: '/data-visualization.jpg',
    features: [
      'Real-time analytics',
      'Custom reporting',
      'Trend analysis',
      'Performance metrics',
      'Data visualization',
      'Export capabilities'
    ]
  }
];

export default function Solutions() {
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
              <span className="text-gray-900">Our</span>{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                AI-Powered
              </span>{' '}
              <span className="text-gray-900">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive suite of AI solutions designed to enhance security,
              improve efficiency, and transform your business operations.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-[300px] md:h-auto">
                  {solution.video ? (
                    <div className="relative h-full">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source src={solution.video} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                  ) : (
                    <Image
                      src={solution.image!}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{solution.title}</h2>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {solution.features.map((feature) => (
                      <div key={feature} className="flex items-center">
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 