"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Star, Heart, Zap, Award, TrendingUp, Sparkles } from "lucide-react";

const SectionTitleDemo: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Section Title Component"
          subtitle="A highly animated and super designed section title component"
          variant="gradient"
          size="xl"
          align="center"
          showDecoration={true}
          className="mb-20"
        />

        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <SectionTitle
              title="Default Section Title"
              subtitle="Clean and simple design"
              variant="default"
              size="lg"
              align="center"
              icon={<Star className="w-8 h-8 text-blue-400" />}
              showDecoration={true}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <SectionTitle
              title="Gradient Section Title"
              subtitle="Beautiful gradient text effect"
              variant="gradient"
              size="lg"
              align="center"
              icon={<Heart className="w-8 h-8 text-red-400" />}
              showDecoration={true}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <SectionTitle
              title="Animated Section Title"
              subtitle="Words animate in sequence"
              variant="animated"
              size="lg"
              align="center"
              icon={<Zap className="w-8 h-8 text-yellow-400" />}
              showDecoration={true}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <SectionTitle
              title="Premium Section Title"
              subtitle="Luxury design with floating icon"
              variant="premium"
              size="lg"
              align="center"
              icon={<Award className="w-8 h-8 text-green-400" />}
              showDecoration={true}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <SectionTitle
              title="Minimal Section Title"
              subtitle="Clean and minimal design"
              variant="minimal"
              size="lg"
              align="center"
              icon={<TrendingUp className="w-8 h-8 text-purple-400" />}
              showDecoration={true}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <SectionTitle
              title="Bold Section Title"
              subtitle="Strong and impactful design"
              variant="bold"
              size="lg"
              align="center"
              icon={<Sparkles className="w-8 h-8 text-orange-400" />}
              showDecoration={true}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitleDemo;
