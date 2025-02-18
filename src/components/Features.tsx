'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  CameraIcon, 
  ChartBarIcon, 
  ShieldCheckIcon,
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Smart Surveillance',
    description: 'Advanced AI-powered cameras with real-time monitoring and intelligent threat detection.',
    icon: CameraIcon,
  },
  {
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics and insights with customizable reporting features.',
    icon: ChartBarIcon,
  },
  {
    title: 'Enhanced Security',
    description: 'Military-grade encryption and secure data handling with privacy compliance.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Real-time Alerts',
    description: 'Instant notifications and alerts for suspicious activities and security breaches.',
    icon: BoltIcon,
  },
  {
    title: 'AI Chatbots',
    description: 'Intelligent chatbots for customer support and automated assistance.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    title: 'Custom Integration',
    description: 'Seamless integration with existing security systems and infrastructure.',
    icon: CogIcon,
  },
];

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              Cutting-edge
            </span>{' '}
            <span className="text-gray-900">Features</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover how our AI-powered solutions can transform your security and customer experience
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 