'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const ServicesSection = () => {
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
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <ServiceCard 
            icon="/icons/strategy-icon.svg"
            title="Strategy with purpose"
            description="We align business objectives with human needs."
            variants={itemVariants}
          />
          
          <ServiceCard 
            icon="/icons/craft-icon.svg"
            title="Craft at scale"
            description="We build systems that grow with your ambitions."
            variants={itemVariants}
          />
          
          <ServiceCard 
            icon="/icons/impact-icon.svg"
            title="Lasting impact"
            description="We create solutions that stand the test of time"
            variants={itemVariants}
          />
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-50 p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <ClientLogo src="/logos/hermosa.svg" alt="Hermosa" delay={0} />
          <ClientLogo src="/logos/continuum.svg" alt="Continuum.ai" delay={0.1} />
          <ClientLogo src="/logos/marcopierre.svg" alt="Marco Pierre" delay={0.2} />
          <ClientLogo src="/logos/chausseur.svg" alt="Chausseur" delay={0.3} />
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  variants
}: { 
  icon: string; 
  title: string; 
  description: string; 
  variants: any;
}) => {
  return (
    <motion.div
      variants={variants}
      className="flex flex-col"
    >
      <motion.div 
        className="bg-gray-100 p-8 mb-8 w-24 h-24 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image 
          src={icon} 
          alt={title} 
          width={60} 
          height={60}
          style={{ objectFit: 'contain' }}
        />
      </motion.div>
      
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

const ClientLogo = ({ 
  src, 
  alt, 
  delay 
}: { 
  src: string; 
  alt: string; 
  delay: number;
}) => {
  return (
    <motion.div 
      className="flex items-center justify-center p-8"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.05 }}
    >
      <Image 
        src={src} 
        alt={alt} 
        width={150} 
        height={50}
        style={{ objectFit: 'contain' }}
      />
    </motion.div>
  );
};

export default ServicesSection;
