'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState } from 'react';

const CaseStudySection = () => {
  const [activeItem, setActiveItem] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const workItems = [
    {
      title: "Understand",
      content: "We begin by immersing ourselves in your business, market, and audience. Through stakeholder interviews, competitive analysis, and user research, we develop a comprehensive understanding of your challenges and opportunities."
    },
    {
      title: "Define",
      content: "Based on our research insights, we define the strategic direction and creative approach. This includes developing positioning, messaging frameworks, and creative concepts that align with your business objectives."
    },
    {
      title: "Create",
      content: "Our multidisciplinary team brings the strategy to life through design, content, and technology. We craft compelling brand experiences that resonate with your audience and drive meaningful engagement."
    },
    {
      title: "Launch",
      content: "We ensure a smooth implementation and launch, providing guidance and support throughout the process. Post-launch, we monitor performance and make data-driven optimizations to maximize impact."
    }
  ];

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
          className="relative w-full h-[600px] mb-24 group overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Image 
            src="/case-study-ev.jpg" 
            alt="Electric vehicle" 
            fill
            style={{ objectFit: 'cover' }}
          />
          
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex flex-col justify-end p-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h3 
              className="text-white text-3xl md:text-4xl font-semibold mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Positioning an electric vehicle innovator in the premium automotive space
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link 
                href="/projects/ev-innovator" 
                className="inline-block bg-purple-900 text-white px-8 py-3 rounded-sm hover:bg-purple-800 transition-colors"
              >
                See Project
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">How we work</h2>
          <p className="text-xl text-gray-700 max-w-3xl">
            We combine deep research, strategy and craft to achieve outstanding results.
          </p>
        </motion.div>
        
        <motion.div 
          className="space-y-4 mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {workItems.map((item, index) => (
            <WorkProcessItem 
              key={index}
              number="•" 
              title={item.title} 
              isOpen={activeItem === index}
              content={item.content}
              onClick={() => setActiveItem(index)}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const WorkProcessItem = ({ 
  number, 
  title, 
  isOpen,
  content,
  onClick,
  variants
}: { 
  number: string; 
  title: string; 
  isOpen: boolean;
  content: string;
  onClick: () => void;
  variants: any;
}) => {
  return (
    <motion.div 
      className={`bg-gray-50 p-6 ${isOpen ? 'pb-12' : ''} cursor-pointer`}
      variants={variants}
      onClick={onClick}
      whileHover={{ backgroundColor: "rgba(243, 244, 246, 1)" }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl mr-4">{number}</span>
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        
        <motion.div 
          className="text-2xl"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? '−' : '+'}
        </motion.div>
      </div>
      
      <motion.div 
        className="pl-10 mt-4 max-w-3xl"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-gray-700">{content}</p>
      </motion.div>
    </motion.div>
  );
};

export default CaseStudySection;
