import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Star,
  Zap,
  Sparkles,
  Sun,
  Moon,
  Cloud,
  ArrowRight,
  Play,
  Download,
  TreeDeciduous,
} from "lucide-react";
import Button from "./Button";

const ButtonDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Modern Button Collection
          </h1>
          <p className="text-gray-600 text-lg">
            Explore our awesome button variants with stunning animations and
            color combinations
          </p>
        </motion.div>

        {/* Primary Variants */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Primary Variants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Button
              variant="primary"
              size="lg"
              icon={<Heart className="w-5 h-5" />}
            >
              Primary Love
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={<Star className="w-5 h-5" />}
            >
              Secondary Star
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Outline Energy
            </Button>
          </div>
        </motion.section>

        {/* Awesome Color Combinations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Awesome Color Combinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Button
              variant="neon"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
              animation="glow"
              glow
            >
              Neon Sparkles
            </Button>
            <Button
              variant="sunset"
              size="lg"
              icon={<Sun className="w-5 h-5" />}
              animation="pulse"
            >
              Sunset Glow
            </Button>
            <Button
              variant="ocean"
              size="lg"
              icon={<Cloud className="w-5 h-5" />}
              animation="bounce"
            >
              Ocean Waves
            </Button>
            <Button
              variant="forest"
              size="lg"
              icon={<TreeDeciduous className="w-5 h-5" />}
              animation="shake"
            >
              Forest Magic
            </Button>
            <Button
              variant="gradient"
              size="lg"
              icon={<Moon className="w-5 h-5" />}
              glow
            >
              Gradient Moon
            </Button>
            <Button
              variant="glass"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Glass Play
            </Button>
          </div>
        </motion.section>

        {/* Icon Positions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Icon Positions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Button
              variant="neon"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Icon Right
            </Button>
            <Button
              variant="sunset"
              size="lg"
              icon={<Download className="w-5 h-5" />}
              iconPosition="left"
            >
              Icon Left
            </Button>
          </div>
        </motion.section>

        {/* Loading States */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Loading States
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Button variant="primary" size="lg" isLoading>
              Loading Primary
            </Button>
            <Button variant="neon" size="lg" isLoading>
              Loading Neon
            </Button>
            <Button variant="sunset" size="lg" isLoading>
              Loading Sunset
            </Button>
          </div>
        </motion.section>

        {/* Different Sizes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Different Sizes
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              variant="ocean"
              size="sm"
              icon={<Heart className="w-4 h-4" />}
            >
              Small
            </Button>
            <Button
              variant="ocean"
              size="md"
              icon={<Heart className="w-4 h-4" />}
            >
              Medium
            </Button>
            <Button
              variant="ocean"
              size="lg"
              icon={<Heart className="w-5 h-5" />}
            >
              Large
            </Button>
            <Button
              variant="ocean"
              size="xl"
              icon={<Heart className="w-6 h-6" />}
            >
              Extra Large
            </Button>
          </div>
        </motion.section>

        {/* Interactive Demo */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Interactive Demo
          </h2>
          <p className="text-gray-600 mb-8">
            Hover over the buttons to see the amazing animations and effects!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="neon"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
              glow
            >
              Hover Me!
            </Button>
            <Button
              variant="sunset"
              size="lg"
              icon={<Sun className="w-5 h-5" />}
              animation="pulse"
            >
              Pulsing!
            </Button>
            <Button
              variant="ocean"
              size="lg"
              icon={<Cloud className="w-5 h-5" />}
              animation="bounce"
            >
              Bouncing!
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ButtonDemo;
