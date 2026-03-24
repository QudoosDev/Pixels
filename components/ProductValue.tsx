'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const ProductValue = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <Image
          src="/download.svg"
          alt="background glow"
          fill
          className="object-cover opacity-100"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container max-w-[1200px] px-8 mx-auto">
        {/* Top Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-[#d1d5db] text-[18px] leading-[28px] font-normal font-poppins max-w-[700px] mb-16"
        >
          Pixels helps you build faster by transforming your design vision into fully functional, production-ready UI components.
        </motion.p>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 items-start">
          {/* Left: Large Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative rounded-[20px] overflow-hidden border border-white/10 group"
          >
            <Image
              src="/features-showcase-1.webp"
              alt="10X Productivity"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              unoptimized
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Right: Chart Card & Content */}
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="relative rounded-[20px] overflow-hidden border border-white/10 bg-gradient-to-br from-[#18181B] to-[#09090B] p-1"
            >
              <div className="rounded-[19px] overflow-hidden bg-[#18181B]">
                <Image
                  src="/features-showcase-2.webp"
                  alt="Monthly Invoice Chart"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  unoptimized
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-[#d1d5db] text-[24px] leading-[30px] font-medium font-poppins">
                Better design with highest <br /> revenue and profits
              </h3>
              <p className="text-[#d1d5db] text-[14px] leading-[20px] font-normal font-poppins max-w-[340px]">
                Pixels empowers you to build beautifully and scale effortlessly.
              </p>
              <motion.a
                href="#"
                whileHover={{ x: 5 }}
                className="text-[#BA004D] text-[14px] font-medium flex items-center gap-2 mt-2 font-poppins cursor-pointer"
              >
                Learn more about the product ↗
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductValue;

