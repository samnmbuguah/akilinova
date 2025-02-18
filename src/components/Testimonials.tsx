'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    quote: "Akilinova's AI surveillance system has revolutionized our security operations. The real-time threat detection is incredibly accurate.",
    author: "Sarah Johnson",
    position: "Head of Security, TechCorp",
    image: "/testimonial1.jpg"
  },
  {
    quote: "The integration of AI chatbots has significantly improved our customer service efficiency while reducing operational costs.",
    author: "Michael Chen",
    position: "CTO, InnovateX",
    image: "/testimonial2.jpg"
  },
  {
    quote: "Their custom integration capabilities made the transition seamless. The analytics dashboard provides invaluable insights.",
    author: "Emma Rodriguez",
    position: "Operations Director, SecureNet",
    image: "/testimonial3.jpg"
  }
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            <span className="text-gray-900">Trusted by</span>{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            See what our clients say about our AI-powered solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <svg
                    className="h-8 w-8 text-blue-600 mb-4"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                </div>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 