'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-black text-white">
      <div className="container mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="col-span-1"
          >
            <h3 className="text-white mb-6">Join our newsletter</h3>
            <div className="flex mb-4 group">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-transparent border border-white/30 px-4 py-3 w-full text-white focus:outline-none focus:border-white transition-colors"
              />
              <motion.button 
                className="bg-purple-900 text-white px-6 py-3 whitespace-nowrap"
                whileHover={{ backgroundColor: "#6b21a8" }}
                whileTap={{ scale: 0.98 }}
              >
                Signup
              </motion.button>
            </div>
            <p className="text-white/60 text-sm">We never share your information</p>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="col-span-1"
          >
            <div className="mb-8">
              <h3 className="text-white mb-4">General enquiries</h3>
              <Link 
                href="mailto:hello@website.com" 
                className="text-white/60 hover:text-white block transition-colors"
              >
                hello@website.com
              </Link>
            </div>
            
            <div>
              <h3 className="text-white mb-4">New business</h3>
              <Link 
                href="mailto:work@website.com" 
                className="text-white/60 hover:text-white block transition-colors"
              >
                work@website.com
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="col-span-1"
          >
            <h3 className="text-white mb-4">Address</h3>
            <address className="text-white/60 not-italic">
              350 High St<br />
              Hawthorn, Victoria 3144<br />
              Australia
            </address>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
