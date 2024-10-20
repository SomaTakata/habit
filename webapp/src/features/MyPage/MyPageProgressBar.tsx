"use client";

import React from "react";

interface ProgressBarProps {
  current: number;
  total: number;
}

const MyPageProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;
  return (
    <div className="flex flex-col gap-3">
      <p className="font-bold text-sm text-muted-foreground">今日の達成度</p>
      <div className="w-full bg-muted rounded-md h-8 relative">
        <div
          className={`bg-orange-400 h-8 ${
            percentage === 100 ? "rounded-md" : "rounded-l-md"
          }`}
          style={{ width: `${percentage}%` }}
        ></div>
        <div
          className={`absolute text-sm right-3 top-2 font-black ${
            percentage === 100
              ? "text-primary-foreground"
              : "text-muted-foreground"
          }`}
        >
          {current}/{total}
        </div>
      </div>
    </div>
  );
};

export default MyPageProgressBar;
