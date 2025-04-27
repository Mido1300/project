'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY, 
    [0, 50], 
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]
  );
  const headerShadow = useTransform(
    scrollY, 
    [0, 50], 
    ["0 0 0 rgba(0, 0, 0, 0)", "0 4px 20px rgba(0, 0, 0, 0.05)"]
  );
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center"
      style={{ 
        backgroundColor: headerBackground,
        boxShadow: headerShadow
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="z-10">
        <motion.div 
          className="bg-green-500 px-2 py-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-black font-bold text-xl">ANDERSEN</span>
        </motion.div>
      </Link>

      <nav className="hidden md:flex items-center space-x-4">
        <NavLink href="/" label="Home" />
        <NavLink href="/solutions" label="Solutions for" />
        <NavLink href="/explore" label="Explore" />
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link 
            href="/buy" 
            className="bg-black text-white px-4 py-2 rounded-sm hover:bg-black/90 transition-colors"
          >
            Buy Now
          </Link>
        </motion.div>
      </nav>

      <motion.button 
        className="md:hidden z-10"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
      >
        <span className="sr-only">Toggle menu</span>
        <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </motion.button>

      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-white z-0 flex flex-col items-center justify-center"
          initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
          animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
          exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.nav 
            className="flex flex-col items-center space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
          >
            <MobileNavLink href="/" label="Home" onClick={() => setIsOpen(false)} />
            <MobileNavLink href="/solutions" label="Solutions for" onClick={() => setIsOpen(false)} />
            <MobileNavLink href="/explore" label="Explore" onClick={() => setIsOpen(false)} />
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="/buy" 
                className="bg-black text-white px-6 py-3 rounded-sm hover:bg-black/90 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Buy Now
              </Link>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </motion.header>
  );
};

const NavLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link 
        href={href} 
        className="relative px-4 py-2 text-black hover:bg-gray-100 rounded-sm transition-colors"
      >
        {label}
      </Link>
    </motion.div>
  );
};

const MobileNavLink = ({ href, label, onClick }: { href: string; label: string; onClick: () => void }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link 
        href={href} 
        className="text-2xl font-medium text-black"
        onClick={onClick}
      >
        {label}
      </Link>
    </motion.div>
  );
};

export default Header;
