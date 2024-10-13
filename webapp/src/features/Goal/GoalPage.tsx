"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import GoalCard from "./GoalCard";

const GoalPage = () => {
  return (
    <div className="grid grid-cols-2 gap-2 justify-between p-3 pb-4">
      {/* GoalCard 1 */}
      <GoalCard color="bg-blue-400" goalText="朝ご飯を食べる" count={12} />

      {/* GoalCard 2 */}
      <GoalCard color="bg-orange-400" goalText="昼ご飯を食べる" count={8} />

      {/* プラスボタン (新しいGoalCardを追加) */}
      <div className="border-2 w-full h-[216px] rounded-md flex items-center justify-center">
        <Plus size={40} className="text-muted-foreground/70" />
      </div>
    </div>
  );
};

export default GoalPage;
