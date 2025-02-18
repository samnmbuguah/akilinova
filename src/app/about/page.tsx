'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const stats = [
  { label: 'Years of Experience', value: '5+' },
  { label: 'Clients Worldwide', value: '100+' },
  { label: 'Success Rate', value: '99.9%' },
  { label: 'Team Members', value: '50+' }
];

const values = [
  {
    title: 'Innovation',
    description: 'We constantly push the boundaries of AI technology to deliver cutting-edge solutions.'
  },
  {
    title: 'Security',
    description: 'Your data security and privacy are our top priorities, with military-grade encryption.'
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our service delivery and customer support.'
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest standards of integrity and transparency in all our operations.'
  }
];

export default function About() {
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
              <span className="text-gray-900">About</span>{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Akilinova
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a team of passionate innovators dedicated to transforming businesses
              through cutting-edge AI technology and intelligent solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center text-white"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At Akilinova, our mission is to empower businesses with intelligent
                solutions that enhance security, improve efficiency, and drive growth.
                We believe in the transformative power of AI technology and its ability
                to create safer, smarter, and more connected environments.
              </p>
              <p className="text-gray-600">
                Through continuous innovation and dedication to excellence, we strive
                to be the leading provider of AI-powered surveillance and automation
                solutions, helping our clients stay ahead in an ever-evolving digital
                landscape.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px]"
            >
              <Image
                src="/akilinova-logo.jpg"
                alt="Our Mission"
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do, from product development to
              customer service.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 