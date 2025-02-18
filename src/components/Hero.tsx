'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              <span className="bg-gradient-to-r from-red-600 to-red-700 text-transparent bg-clip-text">
                AI-Powered
              </span>{' '}
              Security in Real-Time
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
              Detect threats instantly. Respond immediately. Protect continuously.
              Transform your security with cutting-edge AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-red-600 to-red-700 rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Start Free Trial
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white/20 rounded-full hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-200"
              >
                Request Demo
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-12">
              <p className="text-sm text-gray-300 mb-4">Trusted by leading organizations worldwide</p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-white">
                    60%
                  </h3>
                  <p className="text-gray-300 mt-2">Reduction in Incidents</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-white">
                    24/7
                  </h3>
                  <p className="text-gray-300 mt-2">Real-time Monitoring</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-white">
                    1000+
                  </h3>
                  <p className="text-gray-300 mt-2">Active Deployments</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Space */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-1/4 right-10 w-20 h-20 bg-red-500 opacity-10 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-1/4 left-10 w-32 h-32 bg-red-500 opacity-10 rounded-full blur-xl"
      />
    </div>
  );
};

export default Hero; 