'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Zap, ThumbsUp, Layers } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Lightning-fast setup',
      description: 'Launch production-ready pages in minutes with prebuilt components.',
      icon: Zap,
    },
    {
      title: 'Pixel perfect',
      description: 'Modern Figma-driven UI that translates to exact code.',
      icon: ThumbsUp,
      highlighted: true,
    },
    {
      title: 'Highly customizable',
      description: 'Tailwind utility-first classes make customization trivial.',
      icon: Layers,
    },
  ];

  return (
    <section id="features" className="py-24 bg-black relative overflow-hidden">
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="pink-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C6005C" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container max-w-[1200px] px-8 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#C6005C]/10 text-[#C6005C] text-[12px] font-bold px-6 py-2 rounded-full mb-6 inline-block border border-[#C6005C]/20"
          >
            Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[32px] md:text-[40px] font-bold text-white mb-4 font-poppins"
          >
            What you get
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#B3B3B3] text-[16px] max-w-[600px] mx-auto font-poppins"
          >
            Components, patterns and pages — everything you need to ship.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-[#030712] p-8 rounded-xl border ${feature.highlighted ? 'border-[#C6005C]/50' : 'border-[#1e293b]'} shadow-2xl transition-all group flex flex-col items-start`}
            >
              <div className="mb-6">
                <feature.icon 
                  className="w-8 h-8" 
                  style={{ stroke: 'url(#pink-gradient)' }}
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-white text-[16px] leading-[24px] font-medium mb-4 font-poppins">
                {feature.title}
              </h3>
              <p className="text-[#94a3b8] text-[14px] leading-[20px] font-normal font-poppins">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

