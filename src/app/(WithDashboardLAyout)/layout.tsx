// src/layouts/DashboardLayout.tsx
import React from "react";
import { LayoutProps } from "@/types";

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white p-4">Sidebar</aside>
      <div className="flex-1 bg-gray-100 p-6">
        <header className="mb-4 font-bold">Dashboard</header>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
