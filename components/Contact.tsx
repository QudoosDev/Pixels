'use client';

import React from 'react';
import { motion } from 'motion/react';
import { User, Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black overflow-hidden">
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
            className="px-6 py-2 rounded-full mb-8 inline-block border border-[#E60076]/30 bg-[#E60076]/10"
          >
            <span className="text-[#E60076] text-[14px] leading-[20px] font-medium font-poppins">
              Contact
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
            className="text-[30px] leading-[36px] font-semibold bg-gradient-to-r from-white via-white via-[53%] to-[#FC68B8] bg-clip-text text-transparent mb-6 font-poppins"
          >
            Reach out to us
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
            Ready to grow your brand? Let&apos;s connect and build something exceptional together.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[1000px] mx-auto"
        >
          <form className="flex flex-col gap-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Name Field */}
              <div className="flex flex-col gap-3">
                <label className="text-white text-[14px] leading-[20px] font-semibold font-poppins">
                  Your name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#71717A]" />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-transparent border border-[#27272A] rounded-[12px] pl-12 pr-6 py-4 text-white placeholder:text-[#71717A] focus:outline-none focus:border-[#C6005C] transition-all font-poppins text-[14px]"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-3">
                <label className="text-white text-[14px] leading-[20px] font-semibold font-poppins">
                  Email id
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#71717A]" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent border border-[#27272A] rounded-[12px] pl-12 pr-6 py-4 text-white placeholder:text-[#71717A] focus:outline-none focus:border-[#C6005C] transition-all font-poppins text-[14px]"
                  />
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-3">
              <label className="text-white text-[14px] leading-[20px] font-semibold font-poppins">
                Message
              </label>
              <textarea
                rows={6}
                placeholder="Enter your message"
                className="w-full bg-transparent border border-[#27272A] rounded-[12px] px-6 py-4 text-white placeholder:text-[#71717A] focus:outline-none focus:border-[#C6005C] transition-all font-poppins text-[14px] resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-start">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="bg-[#C6005C] text-white px-8 py-3.5 rounded-full font-semibold text-[14px] font-poppins flex items-center gap-2 transition-all duration-200 cursor-pointer"
              >
                Submit <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
