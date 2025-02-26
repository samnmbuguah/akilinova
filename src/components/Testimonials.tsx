'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Testimonials data commented out until we have real client testimonials
/*
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
*/

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Return null to hide the component until we have real testimonials
  return null;
};

export default Testimonials; 