'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden flex flex-col items-center">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <Image
          src="/download.svg"
          alt="background glow"
          fill
          className="object-cover scale-x-[0.9] opacity-100"
          priority
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container max-w-[1200px] px-8 flex flex-col items-center text-center">
        {/* NEW Badge */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-[#18181B]/80 text-white text-[14px] font-medium px-1.5 py-1.5 rounded-full mb-8 tracking-wider border border-white/10 flex items-center gap-3"
        >
          <span className="bg-[#A3004C] text-white px-3 py-1 rounded-full text-[11px] font-bold">NEW</span>
          <span className="pr-3">Try 30 days free trial option &gt;</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-[48px] md:text-[64px] font-bold font-poppins text-white leading-[1.1] mb-6 max-w-[800px]"
        >
          Free template to start your{' '}
          <span className="inline-block bg-gradient-to-r from-[#FC71B5] to-[#FDA1D3] text-white px-4 py-1 rounded-[12px]">Next.js site.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-white text-[14px] leading-[20px] font-normal font-poppins max-w-[600px] mb-10"
        >
          No complexity. No noise. Just clean, reliable automation to boost your team&apos;s efficiency.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-6 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#C6005C] text-white px-8 py-4 rounded-full text-[14px] leading-[20px] font-normal font-poppins shadow-xl shadow-[#C6005C]/20 cursor-pointer"
          >
            Get started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent text-white px-8 py-4 rounded-full text-[14px] leading-[20px] font-normal font-poppins border border-[#C6005C] hover:bg-[#C6005C]/10 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Watch demo
          </motion.button>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {['No credit card', '30 days free trial', 'Setup in 10 minutes'].map((feature) => (
            <div
              key={feature}
              className="bg-[#18181B] text-white/90 text-[14px] px-4 py-2 rounded-full border border-[#27272A] flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C6005C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              {feature}
            </div>
          ))}
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.0, ease: 'easeOut' }}
          className="relative w-full max-w-[1000px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-pink-500/10"
        >
          <Image
            src="/hero-section-showcase.png"
            alt="Dashboard UI"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
            unoptimized
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
