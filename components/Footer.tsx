'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Twitter, Github, Linkedin, Youtube, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="container max-w-[1200px] px-8 mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/footer-logo.svg"
                alt="pixels logo"
                width={24}
                height={24}
                className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>

          {/* Links Columns */}
          <div className="flex flex-wrap gap-16 md:gap-24">
            <div>
              <h4 className="text-white font-bold mb-4 text-[14px] font-poppins">Product</h4>
              <ul className="flex flex-col gap-3">
                {['Home', 'Support', 'Pricing', 'Affiliate'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[#71717A] hover:text-white transition-colors text-[13px] font-poppins">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 text-[14px] font-poppins">Resources</h4>
              <ul className="flex flex-col gap-3">
                {['Company', 'Blogs', 'Community', 'Careers', 'About'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[#71717A] hover:text-white transition-colors text-[13px] font-poppins">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 text-[14px] font-poppins">Legal</h4>
              <ul className="flex flex-col gap-3">
                {['Privacy', 'Terms'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[#71717A] hover:text-white transition-colors text-[13px] font-poppins">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Sentence, Icons, Copyright */}
          <div className="flex flex-col items-end gap-6 text-right md:ml-auto">
            <p className="text-[#71717A] text-[13px] leading-[20px] max-w-[300px] font-poppins">
              Making every customer feel valued—no matter the size of your audience.
            </p>
            
            <div className="flex items-center gap-5">
              <Link href="#" className="text-[#71717A] hover:text-white transition-colors cursor-pointer">
                <Globe className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-[#71717A] hover:text-white transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-[#71717A] hover:text-white transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-[#71717A] hover:text-white transition-colors cursor-pointer">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>

            <p className="text-[#71717A] text-[13px] font-poppins">
              © 2026 pixels
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
