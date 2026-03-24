'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/40 backdrop-blur-md border-b border-white/5' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="w-full max-w-[1200px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="pixels logo"
            width={40}
            height={40}
            className="w-30 h-10"
          />
        </Link>

        {/* Menu Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Features', 'Testimonials', 'Pricing'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                const targetId = item.toLowerCase();
                const element = document.getElementById(targetId);
                
                // @ts-ignore
                if (window.lenis) {
                  // @ts-ignore
                  window.lenis.scrollTo(element || 0);
                } else if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                } else if (item === 'Home') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="text-white/70 hover:text-[lab(56.9303_76.8162_-8.07021)] text-[14px] leading-[20px] font-normal font-poppins transition-colors cursor-pointer"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#C6005C] text-white px-5 py-2 rounded-full text-[14px] font-bold transition-all cursor-pointer"
        >
          Start free trial
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
