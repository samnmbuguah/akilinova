'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden flex items-center justify-center">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-6">
            <span className="bg-gradient-to-r from-red-600 to-red-700 text-transparent bg-clip-text">
              AI-Powered
            </span>{' '}
            Security in Real-Time
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-12">
            Detect threats instantly. Respond immediately. Protect continuously.
            Transform your security with cutting-edge AI technology.
          </p>

          {/* Trust Indicators */}
          <div className="max-w-4xl mx-auto">
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