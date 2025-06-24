// src/layouts/AuthLayout.tsx
import React from "react";
import { LayoutProps } from "@/types";

const AuthLayout = ({ children }: LayoutProps) => {
  return <div className="min-h-screen w-full mx-auto">{children}</div>;
};

export default AuthLayout;
