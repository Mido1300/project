'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const testimonials = [
    {
      quote: "Working with Andersen redefined what we thought possible. Every solution elegant, every interaction purposeful.",
      author: "Sophie Wilson",
      position: "Product Director, Chausseur",
      image: "/testimonial-author-1.jpg"
    },
    {
      quote: "The team at Andersen brought our vision to life with precision and creativity that exceeded our expectations.",
      author: "Michael Chen",
      position: "CEO, Hermosa",
      image: "/testimonial-author-2.jpg"
    },
    {
      quote: "Their strategic approach transformed our brand positioning and helped us connect with our audience in meaningful ways.",
      author: "Olivia Martinez",
      position: "Marketing Director, Continuum.ai",
      image: "/testimonial-author-3.jpg"
    }
  ];
  
  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12">
      <div className="container mx-auto">
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <AnimatePresence mode="wait">
            <motion.blockquote 
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-medium max-w-4xl mb-12"
            >
              "{testimonials[activeIndex].quote}"
            </motion.blockquote>
          </AnimatePresence>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
                <Image 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].author} 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              <h4 className="font-semibold">{testimonials[activeIndex].author}</h4>
              <p className="text-gray-600">{testimonials[activeIndex].position}</p>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className="focus:outline-none"
                aria-label={`Scroll to page ${index + 1}`}
              >
                <motion.div 
                  className={`w-8 h-1 rounded-full ${index === activeIndex ? 'bg-black' : 'bg-gray-300'}`}
                  whileHover={{ backgroundColor: index === activeIndex ? "#000" : "#9CA3AF" }}
                  animate={{ 
                    width: index === activeIndex ? "2rem" : "2rem",
                    backgroundColor: index === activeIndex ? "#000" : "#D1D5DB"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link 
            href="/reviews" 
            className="inline-block bg-purple-900 text-white px-8 py-3 rounded-sm hover:bg-purple-800 transition-colors"
          >
            See more reviews
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
