'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { trackCareerApplication } from '@/utils/analytics';

const positions = [
  {
    title: 'AI Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: "We're looking for an enthusiastic engineer passionate about AI and computer vision to help develop our surveillance solutions. If you&apos;re excited about machine learning and want to make a real impact, we&apos;d love to hear from you.",
    requirements: [
      'Passion for artificial intelligence and computer vision',
      'Basic understanding of machine learning concepts',
      'Interest in Python programming',
      'Eagerness to learn deep learning frameworks like PyTorch or TensorFlow',
      'Ability to work collaboratively in a fast-paced environment',
      'Strong problem-solving skills and attention to detail',
    ],
  },
  {
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: "Join our team to help build and maintain our web applications. We&apos;re looking for someone who loves coding and is excited about creating modern web experiences.",
    requirements: [
      'Interest in modern web development technologies',
      'Basic knowledge of JavaScript/TypeScript',
      'Enthusiasm for learning React and Node.js',
      'Willingness to learn about APIs and cloud services',
      'Good communication skills and team spirit',
      'Passion for writing clean, maintainable code',
    ],
  },
  {
    title: 'Junior DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: "Looking for someone interested in learning and growing in the DevOps space. Help us build and maintain our cloud infrastructure while developing your skills.",
    requirements: [
      'Interest in cloud technologies and automation',
      'Basic understanding of Linux systems',
      'Eagerness to learn about containerization and orchestration',
      'Curiosity about CI/CD practices',
      'Problem-solving mindset',
      'Ability to learn and adapt quickly',
    ],
  }
];

export default function CareersPage() {
  const handleApply = (position: string) => {
    trackCareerApplication(position);
    // Add your application logic here
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us build the future of intelligent surveillance technology. We&apos;re looking for passionate
            individuals who want to make a difference.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 mb-16"
        >
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <motion.h3
                    className="text-2xl font-semibold text-gray-900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {position.title}
                  </motion.h3>
                  <motion.div
                    className="flex gap-4 mt-2 sm:mt-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 transform transition-transform hover:scale-105">
                      {position.department}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 transform transition-transform hover:scale-105">
                      {position.location}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 transform transition-transform hover:scale-105">
                      {position.type}
                    </span>
                  </motion.div>
                </div>
                <motion.p
                  className="text-gray-600 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {position.description}
                </motion.p>
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    {position.requirements.map((req, reqIndex) => (
                      <motion.li
                        key={reqIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.5 + (reqIndex * 0.1) }}
                      >
                        {req}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                <motion.button
                  onClick={() => handleApply(position.title)}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200"
                >
                  Apply Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-2xl shadow-md p-8 text-center transition-all duration-300"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Don&apos;t see a perfect fit?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;re always looking for talented individuals. Send us your resume and let us know how you
            can contribute to our team.
          </p>
          <motion.a
            href="/#contact"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
} 