'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { navVariants, fadeIn, slideIn, staggerContainer, fadeInUp } from '@/utils/animations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Solutions',
      href: '/solutions',
      dropdown: true,
      subItems: [
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Education', href: '/solutions/education' },
        { name: 'Retail', href: '/solutions/retail' },
        { name: 'Real Estate', href: '/solutions/real-estate' },
        { name: 'Banking & Finance', href: '/solutions/banking-finance' },
      ],
    },
    {
      name: 'Company',
      href: '/about',
      dropdown: true,
      subItems: [
        { name: 'About Us', href: '/about' },
        { name: 'Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
      ]
    },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-28">
          {/* Logo */}
          <motion.div
            variants={slideIn}
            initial="initial"
            animate="animate"
            className="w-[250px] flex-shrink-0 flex justify-start"
          >
            <Link href="/" className="flex items-center">
              <div className="relative w-[250px] h-[150px]">
                <Image
                  src="/AkiliNovaLogo.svg"
                  alt="Akilinova Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              className="flex items-center space-x-12"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: item.name === 'Home' ? 0 : item.name === 'Solutions' ? 0.1 : item.name === 'Company' ? 0.2 : item.name === 'Blog' ? 0.3 : 0.4 }}
                  className="relative group"
                >
                  {item.dropdown ? (
                    <div
                      className="flex items-center cursor-pointer"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <span className={`text-xl transition-colors duration-200 py-2 text-gray-800 hover:text-red-600 ${styles.menuText} ${pathname.startsWith(item.href) ? 'text-red-600' : ''
                        }`}>
                        {item.name}
                      </span>
                      <motion.svg
                        animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 w-48 py-2 bg-white rounded-lg shadow-xl"
                          >
                            {item.subItems?.map((subItem, subIndex) => (
                              <motion.div
                                key={subItem.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.1 }}
                              >
                                <Link
                                  href={subItem.href}
                                  className={`block px-4 py-3 text-gray-800 hover:bg-gray-100 ${styles.menuText}`}
                                >
                                  {subItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-xl transition-colors duration-200 py-2 text-gray-800 hover:text-red-600 ${styles.menuText} ${pathname === item.href ? 'text-red-600' : ''
                        }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="md:hidden flex-shrink-0"
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="transition-colors duration-200 focus:outline-none text-gray-800 p-2"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
              </motion.div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-100"
          >
            <motion.div
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={fadeInUp}
                  >
                    {item.dropdown ? (
                      <div className="space-y-4">
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className={`text-lg text-gray-900 ${styles.menuText} w-full text-left flex items-center justify-between`}
                        >
                          {item.name}
                          <motion.svg
                            animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </motion.svg>
                        </button>
                        {activeDropdown === item.name && (
                          <div className="pl-4 space-y-4">
                            {item.subItems?.map((subItem) => (
                              <motion.div
                                key={subItem.name}
                                variants={slideIn}
                              >
                                <Link
                                  href={subItem.href}
                                  className={`block py-2 text-base transition-colors duration-200 ${styles.menuText} ${pathname === subItem.href
                                    ? 'text-red-600'
                                    : 'text-gray-800 hover:text-red-600'
                                    }`}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block text-lg transition-colors duration-200 ${styles.menuText} ${pathname === item.href
                          ? 'text-red-600'
                          : 'text-gray-800 hover:text-red-600'
                          }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 