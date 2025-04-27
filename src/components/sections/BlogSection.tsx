'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const BlogSection = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Latest Thinking</h2>
          <p className="text-xl text-gray-700 max-w-3xl">
            Expert insight from our team and results from our recent work.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <BlogCard 
            image="/blog-audio-tech.jpg"
            title="Crafting a new product narrative for an audio technology pioneer"
            category="Case Study"
            date="Mar 15, 2025"
            color="purple"
            variants={itemVariants}
          />
          
          <BlogCard 
            image="/blog-touch.jpg"
            title="The secret language of touch in digital design"
            category="Insight"
            date="Feb 28, 2025"
            color="green"
            variants={itemVariants}
          />
          
          <BlogCard 
            image="/blog-pressure.jpg"
            title="Creative breakthroughs happen under pressure"
            category="Insight"
            date="Feb 12, 2025"
            color="orange"
            variants={itemVariants}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-gray-50 p-12 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="mb-8 md:mb-0 md:max-w-xl">
            <motion.h3 
              className="text-xl text-gray-500 mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ready for the next step?
            </motion.h3>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Kick-off the next phase of your brand
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              href="/contact" 
              className="inline-block bg-black text-white px-8 py-3 rounded-sm hover:bg-black/90 transition-colors"
            >
              Get in touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const BlogCard = ({ 
  image, 
  title, 
  category,
  date,
  color,
  variants
}: { 
  image: string; 
  title: string; 
  category: string;
  date: string;
  color: 'purple' | 'green' | 'orange';
  variants: any;
}) => {
  const borderColor = {
    purple: 'border-purple-500',
    green: 'border-green-500',
    orange: 'border-orange-500'
  };
  
  return (
    <motion.div
      variants={variants}
      className={`border-t-4 ${borderColor[color]} bg-white overflow-hidden`}
      whileHover={{ 
        y: -10,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3 }
      }}
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
        <div className="flex justify-between text-sm text-gray-500">
          <span>{category}</span>
          <span>{date}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogSection;
