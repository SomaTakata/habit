"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";

interface HeartButtonProps {
  initialCount: number;
}

const HeartButton: React.FC<HeartButtonProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
    setCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <button
      onClick={handleClick}
      className={`text-xs bg-secondary min-w-14 text-secondary-foreground items-center justify-center py-1 flex gap-1 px-3 rounded-xl h-fit ${
        isLiked ? "text-red-500" : ""
      }`}
    >
      <Heart size={12} fill={isLiked ? "currentColor" : "none"} />
      <p className="text-xs">{count}</p>
    </button>
  );
};

export default HeartButton;
