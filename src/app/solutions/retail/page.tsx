'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  VideoCameraIcon,
  ChartBarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CubeIcon
} from '@heroicons/react/24/outline';
import AnimatedCard from '@/components/AnimatedCard';
import { staggerContainer, fadeInUp } from '@/utils/animations';

const solutions = [
  {
    title: 'Store Surveillance',
    description: 'Advanced AI-powered surveillance system for retail stores with real-time monitoring and intelligent threat detection.',
    icon: VideoCameraIcon,
    features: [
      { name: 'Real-time monitoring' },
      { name: 'Theft prevention' },
      { name: 'Customer behavior analysis' },
      { name: 'Staff activity tracking' },
      { name: 'Incident reporting' },
      { name: 'Remote access' }
    ]
  },
  {
    title: 'Customer Analytics',
    description: 'Gain valuable insights into customer behavior and store performance with our advanced analytics platform.',
    icon: ChartBarIcon,
    features: [
      { name: 'Foot traffic analysis' },
      { name: 'Heat mapping' },
      { name: 'Conversion tracking' },
      { name: 'Peak hour identification' },
      { name: 'Department performance' },
      { name: 'Customer journey analysis' }
    ]
  },
  {
    title: 'Queue Management',
    description: 'Intelligent queue management system to optimize customer flow and reduce wait times.',
    icon: UserGroupIcon,
    features: [
      { name: 'Real-time queue monitoring' },
      { name: 'Wait time prediction' },
      { name: 'Staff allocation optimization' },
      { name: 'Peak period alerts' },
      { name: 'Performance analytics' },
      { name: 'Mobile notifications' }
    ]
  },
  {
    title: 'Inventory Protection',
    description: 'Advanced security measures to protect inventory and reduce shrinkage.',
    icon: CubeIcon,
    features: [
      { name: 'Stock monitoring' },
      { name: 'Theft detection' },
      { name: 'Inventory tracking' },
      { name: 'Alert system' },
      { name: 'Access control' },
      { name: 'Audit trails' }
    ]
  },
  {
    title: 'Staff Security',
    description: 'Ensure staff safety and monitor workplace compliance with AI-powered security solutions.',
    icon: ShieldCheckIcon,
    features: [
      { name: 'Staff safety monitoring' },
      { name: 'Emergency response' },
      { name: 'Access control' },
      { name: 'Incident reporting' },
      { name: 'Safety compliance' },
      { name: 'Training tracking' }
    ]
  }
];

export default function RetailSolutions() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="text-gray-900">AI Solutions for</span>{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Retail
              </span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Transform your retail operations with our AI-powered surveillance and analytics solutions.
              Enhance security, improve customer experience, and boost operational efficiency.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          {solutions.map((solution, index) => (
            <AnimatedCard
              key={solution.title}
              {...solution}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-center text-white"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Transform Your Retail Security?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Get in touch with our team to learn how our AI-powered solutions can enhance your security infrastructure and improve operational efficiency.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center"
          >
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-red-600 transition-all duration-200"
            >
              Request Demo
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 