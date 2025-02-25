'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  VideoCameraIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import AnimatedCard from '@/components/AnimatedCard';
import { staggerContainer, fadeInUp } from '@/utils/animations';

const solutions = [
  {
    title: 'Patient Monitoring',
    description: 'Advanced AI-powered monitoring system for healthcare facilities with real-time patient tracking and safety alerts.',
    icon: VideoCameraIcon,
    features: [
      { name: 'Real-time monitoring' },
      { name: 'Fall detection' },
      { name: 'Behavior analysis' },
      { name: 'Emergency alerts' },
      { name: 'Staff response tracking' },
      { name: 'Remote monitoring' }
    ]
  },
  {
    title: 'Facility Security',
    description: 'Comprehensive security solutions to protect healthcare facilities, staff, and patients.',
    icon: ShieldCheckIcon,
    features: [
      { name: 'Access control' },
      { name: 'Visitor management' },
      { name: 'Restricted area monitoring' },
      { name: 'Asset tracking' },
      { name: 'Emergency protocols' },
      { name: 'Incident reporting' }
    ]
  },
  {
    title: 'Staff Safety',
    description: 'Ensure staff safety and optimize workflow with intelligent monitoring solutions.',
    icon: UserGroupIcon,
    features: [
      { name: 'Staff tracking' },
      { name: 'Panic alerts' },
      { name: 'Workflow optimization' },
      { name: 'Resource allocation' },
      { name: 'Performance analytics' },
      { name: 'Safety compliance' }
    ]
  },
  {
    title: 'Operations Analytics',
    description: 'Gain insights into facility operations and improve efficiency with advanced analytics.',
    icon: ChartBarIcon,
    features: [
      { name: 'Resource utilization' },
      { name: 'Patient flow analysis' },
      { name: 'Staff efficiency metrics' },
      { name: 'Equipment tracking' },
      { name: 'Capacity planning' },
      { name: 'Performance reporting' }
    ]
  },
  {
    title: 'Patient Care',
    description: 'Enhance patient care with intelligent monitoring and management systems.',
    icon: HeartIcon,
    features: [
      { name: 'Patient activity monitoring' },
      { name: 'Care response time' },
      { name: 'Treatment tracking' },
      { name: 'Recovery analysis' },
      { name: 'Care coordination' },
      { name: 'Patient safety alerts' }
    ]
  }
];

export default function HealthcareSolutions() {
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
                Healthcare
              </span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Transform your healthcare facility with our AI-powered surveillance and analytics solutions.
              Enhance patient care, improve safety, and optimize facility operations.
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
            Ready to Transform Your Healthcare Security?
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