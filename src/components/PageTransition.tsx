'use client';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 