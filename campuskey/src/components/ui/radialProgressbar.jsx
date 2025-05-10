import React from "react";

export default function RadialProgress({ progress }) {
  const radius = 30;
  const stroke = 4;
  const normalizedRadius = radius;
  const circumference = 2 * Math.PI * normalizedRadius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center rounded-full">
      <svg width={80} height={80}>
        <circle
          className="text-gray-300"
          stroke="currentColor"
          strokeWidth={stroke}
          fill="transparent"
          r={normalizedRadius}
          cx={40}
          cy={40}
        />
        <circle
          className="text-black"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
          r={normalizedRadius}
          cx={40}
          cy={40}
          style={{
            transition: "stroke-dashoffset 0.35s",
            transform: "rotate(-90deg)",
            transformOrigin: "center",
          }}
        />
      </svg>
      <span className="absolute text-sm text-black font-medium">
        {progress}%
      </span>
    </div>
  );
}
