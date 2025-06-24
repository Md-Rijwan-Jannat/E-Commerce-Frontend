"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, Gift } from "lucide-react";
import Button from "../../../../(WithAuthLayout)/_components/ui/Button";
import Input from "../../../../(WithAuthLayout)/_components/ui/Input";

export interface NewsletterSectionProps {
  title: string;
  subtitle: string;
  description: string;
  placeholder: string;
  buttonText: string;
  benefits: string[];
  className?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  title,
  subtitle,
  description,
  placeholder,
  buttonText,
  benefits,
  className,
}) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      console.log("Newsletter subscription:", email);
    }
  };

  return (
    <section
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-8 lg:p-12 ${className}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 h-20 w-20 rounded-full bg-white/10 backdrop-blur-sm"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 h-16 w-16 rounded-full bg-white/10 backdrop-blur-sm"
        animate={{ y: [0, 20, 0], rotate: [360, 180, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur-sm"
        >
          <Gift className="h-4 w-4" />
          <span className="text-sm font-semibold">Exclusive Offers</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-3xl font-bold text-white lg:text-4xl"
        >
          {title}
        </motion.h2>

        {/* Subtitle */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-xl text-white/90"
        >
          {subtitle}
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 max-w-2xl mx-auto text-white/80"
        >
          {description}
        </motion.p>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 flex flex-wrap justify-center gap-4"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur-sm"
            >
              <CheckCircle className="h-4 w-4" />
              <span>{benefit}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto max-w-md"
        >
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder={placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  icon={<Mail className="w-5 h-5" />}
                  className="bg-white/90 backdrop-blur-sm border-white/20 text-gray-800 placeholder-gray-600 focus:bg-white"
                  required
                />
              </div>
              <Button
                type="submit"
                variant="neon"
                icon={<Send className="w-5 h-5" />}
                className="bg-white text-blue-600 hover:bg-gray-100"
                glow
              >
                {buttonText}
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 rounded-xl bg-white/20 p-4 text-white backdrop-blur-sm"
            >
              <CheckCircle className="h-6 w-6 text-green-400" />
              <span className="font-semibold">Thank you for subscribing!</span>
            </motion.div>
          )}
        </motion.div>

        {/* Privacy Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-sm text-white/60"
        >
          We respect your privacy. Unsubscribe at any time.
        </motion.p>
      </div>
    </section>
  );
};

export default NewsletterSection;
