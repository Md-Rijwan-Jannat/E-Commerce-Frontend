/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useLoading } from "../../providers/LoadingProvider";

const SpinnerDemo = () => {
  const { showLoading, hideLoading } = useLoading();
  const [selectedType, setSelectedType] = useState<
    "dots" | "pulse" | "ring" | "bounce" | "wave"
  >("ring");
  const [selectedSize, setSelectedSize] = useState<"sm" | "md" | "lg" | "xl">(
    "md"
  );

  const spinnerTypes = ["dots", "pulse", "ring", "bounce", "wave"] as const;
  const spinnerSizes = ["sm", "md", "lg", "xl"] as const;

  const handleGlobalLoading = () => {
    showLoading("Processing your request...");
    setTimeout(() => {
      hideLoading();
    }, 3000);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        Spinner Component Demo
      </h1>

      {/* Controls */}
      <div className="mb-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Controls</h2>
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Type:</label>
            <select
              value={selectedType}
              onChange={(e) =>
                setSelectedType(
                  e.target.value as
                    | "dots"
                    | "pulse"
                    | "ring"
                    | "bounce"
                    | "wave"
                )
              }
              className="border rounded px-3 py-1"
            >
              {spinnerTypes.map((type) => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Size:</label>
            <select
              value={selectedSize}
              onChange={(e) =>
                setSelectedSize(e.target.value as "sm" | "md" | "lg" | "xl")
              }
              className="border rounded px-3 py-1"
            >
              {spinnerSizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={handleGlobalLoading}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Test Global Loading
            </button>
          </div>
        </div>
      </div>

      {/* Current Spinner */}
      <div className="mb-8 p-6 bg-white border rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Current Selection</h2>
        <div className="flex items-center justify-center h-32">
          <LoadingSpinner
            type={selectedType}
            size={selectedSize}
            text={`${
              selectedType.charAt(0).toUpperCase() + selectedType.slice(1)
            } Spinner`}
          />
        </div>
      </div>

      {/* All Types */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">All Spinner Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spinnerTypes.map((type) => (
            <div
              key={type}
              className="p-4 bg-white border rounded-lg shadow-sm"
            >
              <h3 className="font-medium mb-3 text-center">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </h3>
              <div className="flex items-center justify-center h-20">
                <LoadingSpinner type={type} size="md" showText={false} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Sizes */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">All Sizes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {spinnerSizes.map((size) => (
            <div
              key={size}
              className="p-4 bg-white border rounded-lg shadow-sm text-center"
            >
              <h3 className="font-medium mb-3">{size.toUpperCase()}</h3>
              <div className="flex items-center justify-center h-20">
                <LoadingSpinner type="ring" size={size} showText={false} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpinnerDemo;
