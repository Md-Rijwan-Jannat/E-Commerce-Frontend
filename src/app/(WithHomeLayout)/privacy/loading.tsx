import LoadingSpinner from "@/components/ui/LoadingSpinner";
import React from "react";

export default function loading() {
  return (
    <div className="loading-overlay">
      <div className="text-center">
        <LoadingSpinner
          type="ring"
          size="lg"
          text={"Loading..."}
          className="mb-4"
        />
      </div>
    </div>
  );
}
