'use client';

import React from 'react';
import { motion } from 'motion/react';

const CTABanner = () => {
  return (
    <section className="py-24 px-8 bg-black">
      <div className="container max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full bg-gradient-to-b from-[#841042] to-[#530425] rounded-[32px] p-12 md:p-16 overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left">
              <h2 className="font-poppins font-semibold text-[32px] md:text-[46px] leading-tight md:leading-[60px] bg-gradient-to-r from-white via-white via-[61%] to-[#FC68B8] bg-clip-text text-transparent mb-4">
                Ready to try-out this app?
              </h2>
              <p className="font-poppins font-normal text-[16px] md:text-[18px] bg-gradient-to-r from-white via-white via-[61%] to-[#FC68B8] bg-clip-text text-transparent">
                Your next favourite tool is just one click away.
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#003B6D] px-10 py-4 rounded-full font-poppins font-medium text-[16px] shadow-lg transition-all whitespace-nowrap cursor-pointer"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
