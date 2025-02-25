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
import AnimatedCard from '@/components/AnimatedCard';
import { staggerContainer, fadeInUp } from '@/utils/animations';

const solutions = [
  {
    title: 'Campus Surveillance',
    description: 'Advanced AI-powered surveillance system for educational institutions with real-time monitoring and intelligent threat detection.',
    icon: VideoCameraIcon,
    features: [
      { name: 'Real-time monitoring' },
      { name: 'Campus-wide coverage' },
      { name: 'Threat detection' },
      { name: 'Emergency response' },
      { name: 'Remote surveillance' },
      { name: 'Incident reporting' }
    ]
  },
  {
    title: 'Access Security',
    description: 'Comprehensive access control system to secure campus facilities and monitor entry points.',
    icon: ShieldCheckIcon,
    features: [
      { name: 'Building access control' },
      { name: 'Student ID integration' },
      { name: 'Visitor management' },
      { name: 'Emergency lockdown' },
      { name: 'Access logs' },
      { name: 'Multi-building control' }
    ]
  },
  {
    title: 'Student Safety',
    description: 'Monitor and ensure student safety with intelligent tracking and analytics.',
    icon: UserGroupIcon,
    features: [
      { name: 'Student tracking' },
      { name: 'Attendance monitoring' },
      { name: 'Behavior analysis' },
      { name: 'Emergency alerts' },
      { name: 'Parent notifications' },
      { name: 'Safety compliance' }
    ]
  },
  {
    title: 'Campus Analytics',
    description: 'Gain valuable insights into campus operations and resource utilization.',
    icon: ChartBarIcon,
    features: [
      { name: 'Facility usage' },
      { name: 'Resource allocation' },
      { name: 'Traffic patterns' },
      { name: 'Energy efficiency' },
      { name: 'Maintenance tracking' },
      { name: 'Performance reports' }
    ]
  },
  {
    title: 'Learning Environment',
    description: 'Enhance the learning environment with smart monitoring and management.',
    icon: AcademicCapIcon,
    features: [
      { name: 'Classroom monitoring' },
      { name: 'Environmental control' },
      { name: 'Equipment tracking' },
      { name: 'Space optimization' },
      { name: 'Safety compliance' },
      { name: 'Resource management' }
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
                Education
              </span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Transform your educational institution with our AI-powered surveillance and analytics solutions.
              Enhance campus security, improve safety, and optimize facility operations.
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
            Ready to Transform Your Campus Security?
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