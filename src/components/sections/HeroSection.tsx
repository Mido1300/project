'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen pt-24 pb-16 px-6 md:px-12 flex flex-col justify-center">
      <div className="container mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mb-12"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-12"
          >
            We create work that shapes tomorrow's digital landscape
          </motion.h1>
          
          <motion.div variants={itemVariants}>
            <Link href="/work" className="inline-block bg-black text-white px-8 py-4 rounded-sm hover:bg-black/90 transition-colors">
              See our work
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        style={{ opacity, y }}
        className="w-full mt-8"
      >
        <div className="relative w-full h-[500px] md:h-[600px]">
          <Image 
            src="/hero-image.jpg" 
            alt="Person with earbuds in natural setting" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          
          <motion.div 
            className="absolute bottom-8 left-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <button className="flex items-center bg-black/80 text-white px-6 py-3 rounded-sm hover:bg-black transition-colors group">
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-5 h-5 mr-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, repeatDelay: 2, duration: 1 }}
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </motion.svg>
              Watch Showreel
            </button>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        className="mt-24 max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          We bridge strategic thinking and creative craft to help ambitious brands find their place in a changing world.
        </h2>
      </motion.div>
    </section>
  );
};

export default HeroSection;
