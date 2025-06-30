import React from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <LoadingSpinner
          type="ring"
          size="lg"
          text="Loading your page..."
          className="mb-6"
        />
        <div className="text-sm text-gray-500">
          Preparing your shopping experience...
        </div>
      </div>
    </div>
  );
}
