'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophia Carter',
    handle: '@sophiacodes',
    text: 'This SaaS app has completely streamlined our onboarding...',
    avatar: 'https://picsum.photos/seed/sophia/100/100',
  },
  {
    name: 'Ethan Walker',
    handle: '@ethanwrites',
    text: 'We\'ve tried several tools, but nothing comes close in terms of...',
    avatar: 'https://picsum.photos/seed/ethan/100/100',
  },
  {
    name: 'Maya Patel',
    handle: '@mayapatel',
    text: 'The automation features alone have saved our team countless...',
    avatar: 'https://picsum.photos/seed/maya/100/100',
  },
  {
    name: 'Liam Johnson',
    handle: '@liamdev',
    text: 'The best investment we\'ve made for our development workflow...',
    avatar: 'https://picsum.photos/seed/liam/100/100',
  },
  {
    name: 'Ava Martinez',
    handle: '@avamart',
    text: 'Incredible UI components that are actually production-ready...',
    avatar: 'https://picsum.photos/seed/ava/100/100',
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="bg-[#18010B] p-5 rounded-[16px] border border-[#C6005C]/30 flex flex-col gap-4 min-w-[315px] max-w-[315px]">
    <div className="flex items-center gap-4">
      <div className="relative w-9 h-9 shrink-0">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={36}
          height={36}
          className="rounded-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div>
        <div className="flex items-center gap-1.5">
          <h4 className="text-white font-semibold text-[13px] font-poppins">{testimonial.name}</h4>
          <CheckCircle2 className="w-3 h-3 text-[#3B82F6] fill-[#3B82F6]" />
        </div>
        <p className="text-[#71717A] text-[11px] leading-[14px] font-normal font-poppins">
          {testimonial.handle}
        </p>
      </div>
    </div>
    <p className="text-[#71717A] text-[13px] leading-[18px] font-normal font-poppins">
      {testimonial.text}
    </p>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-black overflow-hidden">
      <div className="container max-w-[1200px] px-8 mx-auto mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="px-6 py-2 rounded-full mb-8 inline-block border border-[#C6005C]/30 bg-[#C6005C]/10"
          >
            <span className="text-[#C6005C] text-[14px] leading-[20px] font-medium font-poppins">
              Testimonials
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
            className="text-[30px] leading-[36px] font-semibold text-white mb-6 font-poppins"
          >
            Don&apos;t just take our words
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-[#71717A] text-[16px] leading-[24px] font-normal font-poppins max-w-[600px] mx-auto"
          >
            Hear what our users say about us. We&apos;re always looking for ways to improve. If you have a positive experience with us, leave a review.
          </motion.p>
        </motion.div>
      </div>

      {/* Scrolling Rows */}
      <div className="flex flex-col gap-6 relative" style={{ transform: "translateZ(0)" }}>
        {/* Deep Gradient Overlays for the "centered" look with dark fades */}
        <div className="absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-black via-black/95 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[40%] bg-gradient-to-l from-black via-black/95 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Right to Left */}
        <div className="flex overflow-hidden w-full">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ willChange: "transform", transform: "translateZ(0)" }}
            className="flex gap-6 pr-6 shrink-0"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="flex overflow-hidden w-full">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ willChange: "transform", transform: "translateZ(0)" }}
            className="flex gap-6 pr-6 shrink-0"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

