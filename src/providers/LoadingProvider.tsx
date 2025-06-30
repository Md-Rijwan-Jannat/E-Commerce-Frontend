"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import LoadingSpinner from "../components/ui/LoadingSpinner";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  showLoading: (text?: string) => void;
  hideLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

interface LoadingProviderProps {
  children: React.ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading...");

  const showLoading = (text?: string) => {
    setLoadingText(text || "Loading...");
    setIsLoading(true);
  };

  const hideLoading = () => {
    setIsLoading(false);
  };

  // Auto-hide loading after 5 seconds to prevent infinite loading
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
        showLoading,
        hideLoading,
      }}
    >
      {children}

      {/* Global Loading Overlay */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="text-center">
            <LoadingSpinner
              type="ring"
              size="lg"
              text={loadingText}
              className="mb-4"
            />
            <div className="text-xs text-gray-500 mt-2">
              Please wait while we prepare your experience...
            </div>
          </div>
        </div>
      )}
    </LoadingContext.Provider>
  );
};
