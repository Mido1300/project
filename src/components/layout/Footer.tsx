'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-white mb-6">Join our newsletter</h3>
            <div className="flex mb-4">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-transparent border border-white/30 px-4 py-3 w-full text-white focus:outline-none"
              />
              <button className="bg-purple-900 text-white px-6 py-3 whitespace-nowrap">
                Signup
              </button>
            </div>
            <p className="text-white/60 text-sm">We never share your information</p>
          </div>
          
          <div>
            <h3 className="text-white mb-6">General enquiries</h3>
            <Link href="mailto:hello@website.com" className="text-white/60 hover:text-white block mb-4">
              hello@website.com
            </Link>
            
            <h3 className="text-white mb-6 mt-8">New business</h3>
            <Link href="mailto:work@website.com" className="text-white/60 hover:text-white block mb-4">
              work@website.com
            </Link>
          </div>
          
          <div>
            <h3 className="text-white mb-6">Quick links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Link href="/" className="text-white/60 hover:text-white">Home</Link>
              <Link href="/about" className="text-white/60 hover:text-white">About</Link>
              <Link href="/pricing" className="text-white/60 hover:text-white">Pricing</Link>
              <Link href="/portfolio" className="text-white/60 hover:text-white">Portfolio</Link>
              <Link href="/careers" className="text-white/60 hover:text-white">Careers</Link>
              <Link href="/blog" className="text-white/60 hover:text-white">Blog</Link>
              <Link href="/contact" className="text-white/60 hover:text-white">Contact</Link>
            </div>
            
            <div className="mt-8">
              <Link 
                href="/buy" 
                className="inline-block border border-white/30 text-white px-6 py-3 hover:bg-white/10 transition-colors"
              >
                Buy now
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="text-center md:text-left mb-8">
            <h1 className="text-white text-6xl md:text-8xl font-bold">ANDERSEN</h1>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © Copyright 2025 Medium Rare. <Link href="#" className="text-purple-400 hover:underline">See more Framer Templates</Link>
            </p>
            <Link href="/terms" className="text-purple-400 hover:underline">
              Terms & Conditions
            </Link>
          </div>
          
          <div className="mt-8">
            <p className="text-white/40 text-xs">
              This text is a legal disclaimer designed for the footer of a website. Begin with a statement acknowledging the company's registration status. This should include a placeholder for a generic location and a fictitious registration number, for example, "Registered in [Location], USA (No. XX-123456)". The text should mention the company's authorization under a relevant state-level oversight department, citing a specific act and including a placeholder for the license number. Mention the company's authorization under a specific state department, citing a relevant act. Include a placeholder for a license number, like "Authorized by the [State Department of Business Oversight] under the [State Money Transmission Act] (License No. YZ-987654)."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
