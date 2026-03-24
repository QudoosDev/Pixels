'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$29',
    features: [
      'Access to all basic courses',
      'Community support',
      '10 practice projects',
      'Course completion certificate',
      'Basic code review',
    ],
    isPopular: false,
    bgColor: 'bg-[#18010B]',
    buttonBg: 'bg-[#C6005C]',
    buttonText: 'text-white',
  },
  {
    name: 'Pro',
    price: '$79',
    features: [
      'Access to all Pro courses',
      'Priority community support',
      '30 practice projects',
      'Course completion certificate',
      'Advance code review',
      '1-on-1 mentoring sessions',
      'Job assistance',
    ],
    isPopular: true,
    bgColor: 'bg-[#510424]',
    buttonBg: 'bg-white',
    buttonText: 'text-[#C6005C]',
  },
  {
    name: 'Enterprise',
    price: '$199',
    features: [
      'Access to all courses',
      'Dedicated support',
      'Unlimited projects',
      'Course completion certificate',
      'Premium code review',
    ],
    isPopular: false,
    bgColor: 'bg-[#18010B]',
    buttonBg: 'bg-[#C6005C]',
    buttonText: 'text-white',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-black overflow-hidden">
      <div className="container max-w-[1100px] px-8 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center flex flex-col items-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="px-6 py-2 rounded-full mb-8 inline-block border border-[#C6005C]/30 bg-[#C6005C]/10"
          >
            <span className="text-[#C6005C] text-[14px] leading-[20px] font-medium font-poppins">
              Pricing
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
            Our Pricing Plans
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{ color: 'lab(84.7652 -1.94535 -7.93337)' }}
            className="text-[14px] leading-[20px] font-normal font-poppins max-w-[600px] mx-auto"
          >
            Flexible pricing options designed to meet your needs — whether you&apos;re just getting started or scaling up.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-end max-w-[1000px] mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.bgColor} p-7 rounded-[22px] border border-[#C6005C]/30 flex flex-col gap-7 ${
                plan.isPopular ? 'md:scale-105 z-10' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-4 bg-[#C6005C] text-white text-[13px] leading-[18px] font-normal font-poppins px-3.5 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center">
                <h3 className="text-white text-[13px] leading-[18px] font-semibold font-poppins mb-3">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-white text-[27px] leading-[32px] font-semibold font-poppins">
                    {plan.price}
                  </span>
                  <span className="text-[#71717A] text-[13px] leading-[18px] font-normal font-poppins">
                    /month
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-3.5 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#C6005C] mt-0.5 shrink-0" />
                    <span
                      style={{ color: 'lab(84.7652 -1.94535 -7.93337)' }}
                      className="text-[13px] leading-[18px] font-normal font-poppins"
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full ${plan.buttonBg} ${plan.buttonText} py-3 rounded-[10px] font-semibold text-[13px] font-poppins transition-all duration-200 cursor-pointer`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
