"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  CreditCard,
  Truck,
  RefreshCw,
  Shield,
  AlertTriangle,
} from "lucide-react";
import LegalPageLayout from "../../ui/LegalPageLayout";

const TermsOfService: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <LegalPageLayout
      title="Terms of Service"
      subtitle="Please read these terms carefully before using our services"
      lastUpdated="December 20, 2024"
      icon="terms"
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Important Notice
                </h3>
                <p className="text-blue-800 mb-0">
                  By accessing and using our e-commerce platform, you agree to
                  be bound by these Terms of Service. If you do not agree to
                  these terms, please do not use our services.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Agreement to Terms */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Shield className="w-6 h-6 text-blue-600 mr-3" />
            1. Agreement to Terms
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of our
              e-commerce website and services operated by ShopHub
              (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing
              or using our service, you agree to be bound by these Terms.
            </p>
            <p>
              We reserve the right to update these Terms at any time. Changes
              will be effective immediately upon posting. Your continued use of
              the service after any changes constitutes acceptance of the new
              Terms.
            </p>
          </div>
        </motion.section>

        {/* Use of Service */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <ShoppingCart className="w-6 h-6 text-blue-600 mr-3" />
            2. Use of Service
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              Our e-commerce platform allows you to browse, search, and purchase
              products. You may use our service only for lawful purposes and in
              accordance with these Terms.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">
                You agree NOT to:
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • Use the service for any unlawful purpose or to solicit
                  unlawful business
                </li>
                <li>
                  • Impersonate any person or entity or falsely state your
                  affiliation
                </li>
                <li>
                  • Interfere with or disrupt the service or servers connected
                  to the service
                </li>
                <li>
                  • Attempt to gain unauthorized access to any portion of the
                  service
                </li>
                <li>
                  • Use automated scripts to collect information from the
                  service
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Account Registration */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            3. Account Registration
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              To access certain features of our service, you must register for
              an account. You agree to provide accurate, current, and complete
              information during registration and to update such information as
              needed.
            </p>
            <p>
              You are responsible for safeguarding your password and all
              activities under your account. You must notify us immediately of
              any unauthorized use of your account.
            </p>
          </div>
        </motion.section>

        {/* Products and Orders */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CreditCard className="w-6 h-6 text-blue-600 mr-3" />
            4. Products and Orders
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              All product descriptions, prices, and availability are subject to
              change without notice. We reserve the right to limit quantities
              and refuse orders at our discretion.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3">Pricing</h4>
                <p className="text-blue-800">
                  All prices are listed in USD and include applicable taxes
                  unless otherwise specified. Prices are subject to change
                  without notice.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-3">
                  Order Confirmation
                </h4>
                <p className="text-green-800">
                  Order confirmation does not guarantee product availability. We
                  will notify you if any ordered items are unavailable.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Payment Terms */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            5. Payment Terms
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              Payment is required at the time of purchase. We accept major
              credit cards, PayPal, and other payment methods as displayed
              during checkout.
            </p>
            <p>
              By providing payment information, you represent that you are
              authorized to use the payment method and authorize us to charge
              the total amount of your order.
            </p>
          </div>
        </motion.section>

        {/* Shipping and Delivery */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Truck className="w-6 h-6 text-blue-600 mr-3" />
            6. Shipping and Delivery
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              We will make every effort to ship orders within the timeframe
              specified. However, delivery times are estimates and not
              guaranteed.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-3">
                Shipping Policies
              </h4>
              <ul className="space-y-2 text-yellow-800">
                <li>• Standard shipping: 5-7 business days</li>
                <li>• Express shipping: 2-3 business days</li>
                <li>• International shipping may take 10-21 business days</li>
                <li>• Shipping costs are calculated at checkout</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Returns and Refunds */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <RefreshCw className="w-6 h-6 text-blue-600 mr-3" />
            7. Returns and Refunds
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              We want you to be completely satisfied with your purchase. Items
              may be returned within 30 days of delivery for a full refund,
              subject to our return policy.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">
                Return Conditions
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Items must be in original condition and packaging</li>
                <li>• Items must be unused and unworn</li>
                <li>
                  • Return shipping costs are the responsibility of the customer
                </li>
                <li>• Refunds will be processed within 5-10 business days</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Limitation of Liability */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            8. Limitation of Liability
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              To the fullest extent permitted by law, we shall not be liable for
              any indirect, incidental, special, consequential, or punitive
              damages arising out of your use of the service.
            </p>
            <p>
              Our total liability for any claims arising from these Terms or
              your use of the service shall not exceed the amount you paid for
              the products or services in question.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            9. Contact Information
          </h2>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <div className="text-gray-600 space-y-2">
              <p>• Email: legal@shophub.com</p>
              <p>• Phone: +1 (555) 123-4567</p>
              <p>• Address: 123 Commerce Street, Business City, BC 12345</p>
            </div>
          </div>
        </motion.section>
      </div>
    </LegalPageLayout>
  );
};

export default TermsOfService;
