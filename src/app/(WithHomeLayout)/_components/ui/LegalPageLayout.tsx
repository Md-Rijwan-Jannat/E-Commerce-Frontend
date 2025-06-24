"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Shield, FileText } from "lucide-react";
import Link from "next/link";

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  icon: "terms" | "privacy";
  children: React.ReactNode;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  title,
  subtitle,
  lastUpdated,
  icon,
  children,
}) => {
  const iconMap = {
    terms: FileText,
    privacy: Shield,
  };

  const IconComponent = iconMap[icon];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-6 group transition-colors"
            >
              <ArrowLeft
                size={20}
                className="mr-2 group-hover:-translate-x-1 transition-transform"
              />
              Back to Home
            </Link>

            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <IconComponent className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {title}
                </h1>
                <p className="text-xl text-gray-600">{subtitle}</p>
              </div>
            </div>

            <div className="flex items-center text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-lg">
              <Calendar size={16} className="mr-2" />
              Last updated: {lastUpdated}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
        >
          <div className="p-8 sm:p-12">{children}</div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Questions about our{" "}
              {icon === "terms" ? "Terms of Service" : "Privacy Policy"}?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPageLayout;
