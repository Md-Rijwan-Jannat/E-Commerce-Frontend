"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Shield,
  Eye,
  Users,
  Lock,
  Globe,
  Mail,
  Cookie,
} from "lucide-react";
import LegalPageLayout from "../../ui/LegalPageLayout";

const PrivacyPolicy: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information"
      lastUpdated="December 20, 2024"
      icon="privacy"
    >
      <div className="prose prose-lg max-w-none">
        {/* Introduction */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-start">
              <Shield className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Your Privacy Matters
                </h3>
                <p className="text-green-800 mb-0">
                  We are committed to protecting your privacy and handling your
                  personal information with care. This policy explains how we
                  collect, use, and safeguard your data.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Information We Collect */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Database className="w-6 h-6 text-blue-600 mr-3" />
            1. Information We Collect
          </h2>
          <div className="text-gray-700 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Personal Information
                </h4>
                <ul className="space-y-2 text-blue-800">
                  <li>• Name and contact information</li>
                  <li>• Email address and phone number</li>
                  <li>• Billing and shipping addresses</li>
                  <li>• Payment information</li>
                  <li>• Account credentials</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Usage Information
                </h4>
                <ul className="space-y-2 text-purple-800">
                  <li>• Browsing history and preferences</li>
                  <li>• Purchase history and patterns</li>
                  <li>• Device and browser information</li>
                  <li>• IP address and location data</li>
                  <li>• Cookies and similar technologies</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How We Use Your Information */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Globe className="w-6 h-6 text-blue-600 mr-3" />
            2. How We Use Your Information
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              We use the information we collect to provide, maintain, and
              improve our services. Here&apos;s how we use your data:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Service Delivery
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Process and fulfill orders</li>
                    <li>• Handle payments and shipping</li>
                    <li>• Provide customer support</li>
                    <li>• Send order confirmations and updates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Service Improvement
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Personalize your experience</li>
                    <li>• Recommend products you might like</li>
                    <li>• Analyze usage patterns</li>
                    <li>• Improve website functionality</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Information Sharing */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            3. Information Sharing
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information only in the following
              circumstances:
            </p>
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-3">
                  With Service Providers
                </h4>
                <p className="text-yellow-800">
                  We may share information with trusted third-party service
                  providers who help us operate our business, such as payment
                  processors, shipping companies, and analytics providers.
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-3">
                  Legal Requirements
                </h4>
                <p className="text-red-800">
                  We may disclose information when required by law, court order,
                  or government request, or to protect our rights, property, or
                  safety.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Cookies and Tracking */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Cookie className="w-6 h-6 text-blue-600 mr-3" />
            4. Cookies and Tracking Technologies
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              We use cookies and similar technologies to enhance your browsing
              experience, remember your preferences, and analyze website
              traffic.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Essential Cookies
                </h4>
                <p className="text-sm text-blue-800">
                  Required for basic site functionality
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-green-900 mb-2">
                  Analytics Cookies
                </h4>
                <p className="text-sm text-green-800">
                  Help us understand site usage
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-purple-900 mb-2">
                  Marketing Cookies
                </h4>
                <p className="text-sm text-purple-800">
                  Enable personalized content
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Data Security */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Lock className="w-6 h-6 text-blue-600 mr-3" />
            5. Data Security
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              We implement industry-standard security measures to protect your
              personal information from unauthorized access, disclosure,
              alteration, or destruction.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">
                Security Measures Include:
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li>• SSL encryption for data transmission</li>
                  <li>• Secure payment processing</li>
                  <li>• Regular security audits</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li>• Access controls and authentication</li>
                  <li>• Data backup and recovery procedures</li>
                  <li>• Employee training on data protection</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Your Rights */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            6. Your Rights and Choices
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              You have certain rights regarding your personal information.
              Depending on your location, these may include:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-3">
                  Data Access & Control
                </h4>
                <ul className="space-y-2 text-green-800">
                  <li>• Access your personal information</li>
                  <li>• Update or correct your data</li>
                  <li>• Delete your account and data</li>
                  <li>• Export your data</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3">
                  Communication Preferences
                </h4>
                <ul className="space-y-2 text-blue-800">
                  <li>• Opt out of marketing emails</li>
                  <li>• Manage cookie preferences</li>
                  <li>• Control data sharing</li>
                  <li>• Request data portability</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Data Retention */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            7. Data Retention
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              We retain your personal information only as long as necessary to
              provide our services and comply with legal obligations.
            </p>
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-3">
                Retention Periods
              </h4>
              <ul className="space-y-2 text-orange-800">
                <li>• Account information: Until account deletion</li>
                <li>• Transaction records: 7 years for tax purposes</li>
                <li>• Marketing data: Until you opt out</li>
                <li>• Analytics data: 24 months maximum</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Changes to Privacy Policy */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            8. Changes to This Policy
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by email or through a prominent
              notice on our website.
            </p>
            <p>
              Your continued use of our services after any changes indicates
              your acceptance of the updated policy.
            </p>
          </div>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Mail className="w-6 h-6 text-blue-600 mr-3" />
            9. Contact Us
          </h2>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or how we
              handle your data, please contact our Privacy Team:
            </p>
            <div className="text-gray-600 space-y-2">
              <p>• Email: privacy@shophub.com</p>
              <p>• Phone: +1 (555) 123-4567</p>
              <p>• Address: 123 Commerce Street, Business City, BC 12345</p>
              <p>• Data Protection Officer: dpo@shophub.com</p>
            </div>
          </div>
        </motion.section>
      </div>
    </LegalPageLayout>
  );
};

export default PrivacyPolicy;
