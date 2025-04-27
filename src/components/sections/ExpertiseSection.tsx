'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const ExpertiseSection = () => {
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
    <section ref={sectionRef} className="py-24 px-6 md:px-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Where we make a difference</h2>
          <p className="text-xl text-gray-700 max-w-3xl">
            We have deep expertise across sectors that demand excellence.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <ExpertiseCard 
            image="/expertise-fashion.jpg"
            title="Fashion & Beauty"
            description="From bold campaigns to community-building strategies, we craft narratives that tap into the emotional connection people have with style, identity, and self-expression, driving loyalty and influence."
            variants={itemVariants}
          />
          
          <ExpertiseCard 
            image="/expertise-lifestyle.jpg"
            title="Lifestyle & Hospitality"
            description="We create experiences as refined as the brands we represent. By blending storytelling with strategy, we help luxury brands connect with audiences who value both sophistication and authenticity."
            variants={itemVariants}
          />
          
          <ExpertiseCard 
            image="/expertise-tech.jpg"
            title="Tech & Innovation"
            description="Cutting-edge doesn't have to feel out of reach. We specialize in translating complex products and services into compelling stories that resonate with real people."
            variants={itemVariants}
          />
        </motion.div>
      </div>
    </section>
  );
};

const ExpertiseCard = ({ 
  image, 
  title, 
  description, 
  variants 
}: { 
  image: string; 
  title: string; 
  description: string; 
  variants: any;
}) => {
  return (
    <motion.div
      variants={variants}
      className="bg-gray-50 overflow-hidden"
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <Image 
            src={image} 
            alt={title} 
            fill
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
      </div>
      
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

export default ExpertiseSection;
