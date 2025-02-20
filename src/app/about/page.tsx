'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  LightBulbIcon, 
  EyeIcon, 
  ShieldCheckIcon, 
  UserGroupIcon, 
  BeakerIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline';

const values = [
  {
    title: 'Innovation',
    description: "We continuously push the boundaries of AI technology to create cutting-edge solutions that transform security and surveillance.",
    icon: LightBulbIcon,
  },
  {
    title: 'Integrity',
    description: "We maintain the highest standards of ethics and transparency in all our operations and relationships.",
    icon: ShieldCheckIcon,
  },
  {
    title: 'Customer Focus',
    description: "Our customers' success is our success. We are dedicated to delivering solutions that exceed expectations.",
    icon: UserGroupIcon,
  },
  {
    title: 'Excellence',
    description: "We strive for excellence in everything we do, from product development to customer service.",
    icon: SparklesIcon,
  },
  {
    title: 'Continuous Learning',
    description: "We embrace continuous learning and adapt to evolving technologies and market needs.",
    icon: BeakerIcon,
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mission & Vision Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6">
                <EyeIcon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize security and surveillance through innovative AI solutions, making spaces safer and operations more efficient for businesses worldwide. We are committed to developing cutting-edge technology that enhances security while respecting privacy and ethical considerations.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6">
                <LightBulbIcon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the global leader in AI-powered surveillance solutions, setting new standards in security technology and creating a safer, more secure world through intelligent innovation. We envision a future where advanced AI technology makes security both more effective and more accessible.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our core values guide everything we do, from product development to customer relationships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 3) }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 