// src/layouts/HomeLayout.tsx
import React from "react";
import { LayoutProps } from "@/types";
import PromotionalHeader from "./_components/ui/PromotionalHeader";
import Navbar from "./_components/ui/Navbar";
import Footer from "./_components/ui/Footer";

const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <PromotionalHeader />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
