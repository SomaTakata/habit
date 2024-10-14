"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import GoalCard from "./GoalCard";

const GoalPage = () => {
  return (
    <div className="grid grid-cols-2 gap-2 justify-between p-3 pb-24">
      <GoalCard color="bg-blue-400" goalText="朝ご飯を食べる" count={12} />

      <GoalCard color="bg-orange-400" goalText="昼ご飯を食べる" count={8} />

      <div className="border-2 border-border w-full h-[218px] rounded-md flex items-center justify-center">
        <Plus size={40} className="text-muted-foreground/50" />
      </div>
    </div>
  );
};

export default GoalPage;
