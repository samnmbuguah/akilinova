'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { scaleUp } from '@/utils/animations';

interface Feature {
  name: string;
}

interface AnimatedCardProps {
  title: string;
  description: string;
  features: Feature[];
  icon: React.ElementType;
  index: number;
}

const AnimatedCard = ({ title, description, features, icon: Icon, index }: AnimatedCardProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        ease: "easeOut"
      }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
          className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center"
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
        <h2 className="text-2xl font-bold text-black mb-4">{title}</h2>
      </div>
      <motion.p 
        variants={scaleUp}
        className="text-gray-600 mb-6"
      >
        {description}
      </motion.p>
      <motion.div 
        className="grid grid-cols-1 gap-3"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: index * 0.2 + 0.5
            }
          }
        }}
        initial="hidden"
        animate="visible"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.name}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            className="flex items-center"
          >
            <motion.svg
              className="w-5 h-5 text-red-600 mr-2 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </motion.svg>
            <span className="text-gray-700">{feature.name}</span>
          </motion.div>
        ))}
      </motion.div>
      <motion.div 
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.2 + 1 }}
      >
        <Link
          href="/demo"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-red-600 to-red-700 hover:shadow-lg transition-all duration-200"
        >
          Learn More
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCard; 