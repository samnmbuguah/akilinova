'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { usePathname } from 'next/navigation';

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
    { name: 'Blog', href: '/blog' },
    { name: 'Company', href: '/about', dropdown: true, subItems: [
      { name: 'About Us', href: '/about' },
      { name: 'Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
    ]},
  ];

  return (
    <nav
      className="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-24 h-24">
              <Image
                src="/akilinova_logo.jpeg"
                alt="Akilinova Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    className="flex items-center cursor-pointer"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span className={`text-lg font-semibold transition-colors duration-200 py-2 text-gray-800 hover:text-red-600 ${
                      pathname.startsWith(item.href) ? 'text-red-600' : ''
                    }`}>
                      {item.name}
                    </span>
                    <svg
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
                    </svg>
                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 w-48 py-2 bg-white rounded-lg shadow-xl">
                        {item.subItems?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-lg font-semibold transition-colors duration-200 py-2 text-gray-800 hover:text-red-600 ${
                      pathname === item.href ? 'text-red-600' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/demo"
              className="text-lg bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 flex items-center space-x-2 shadow-md"
            >
              <span>Request Demo</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden transition-colors duration-200 focus:outline-none text-gray-800"
          >
            {isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <>
                  <div className="py-3 text-lg font-semibold text-gray-500">
                    {item.name}
                  </div>
                  <div className="pl-4 space-y-2">
                    {item.subItems?.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={`block py-2 text-base transition-colors duration-200 ${
                          pathname === subItem.href
                            ? 'text-red-600'
                            : 'text-gray-800 hover:text-red-600'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`block py-3 text-lg font-semibold transition-colors duration-200 ${
                    pathname === item.href
                      ? 'text-red-600'
                      : 'text-gray-800 hover:text-red-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/demo"
            className="block bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-200 text-lg"
            onClick={() => setIsOpen(false)}
          >
            Request Demo
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 