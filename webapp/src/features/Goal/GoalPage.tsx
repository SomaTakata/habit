"use client";

import * as React from "react";
import { GoalCalendar } from "./GoalCalendar";
import { Flame, Plus } from "lucide-react";

const GoalPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="grid grid-cols-2 gap-2 justify-between p-3 pb-4">
      {/* GoalCard 1 */}
      <div className="flex flex-col items-stretch p-2.5 pb-3 gap-3 bg-blue-400 rounded-lg max-w-full">
        <GoalCalendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border w-full" // w-full で幅を親に合わせる
        />
        <div className="flex flex-col gap-1 text-primary-foreground">
          <div className="flex gap-1 justify-center">
            <Flame size={16} />
            <p className="text-sm font-semibold">12</p>
          </div>
          <p className="text-base font-bold text-center">朝ご飯を食べる</p>
        </div>
      </div>

      {/* GoalCard 2 */}
      <div className="flex flex-col items-stretch p-2.5 pb-3  gap-3 bg-orange-400 rounded-lg max-w-full">
        <GoalCalendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border w-full" // w-full で幅を親に合わせる
        />
        <div className="flex flex-col gap-1 text-primary-foreground">
          <div className="flex gap-1 justify-center">
            <Flame size={16} />
            <p className="text-sm font-semibold">12</p>
          </div>
          <p className="text-base font-bold text-center">朝ご飯を食べる</p>
        </div>
      </div>

      {/* プラスボタン (新しいGoalCardを追加) */}
      <div className="border-2 w-full h-[216px] rounded-md flex items-center justify-center">
        <Plus size={40} className="text-muted-foreground/70" />
      </div>
    </div>
  );
};

export default GoalPage;
