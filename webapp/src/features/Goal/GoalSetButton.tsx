"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { GoalSetDialog } from "./GoalSetModal";
import GoalSetPage from "./GoalSetPage";
import { GoalSetProps } from "./GoalPage";

const GoalSetButton = ({ settingOpen, setSettingOpen }: GoalSetProps) => {
  return (
    <GoalSetDialog open={settingOpen} onOpenChange={setSettingOpen}>
      <div
        onClick={() => setSettingOpen(true)}
        className="border-2 border-border w-full h-[218px] rounded-md flex items-center justify-center"
      >
        <Plus size={40} className="text-muted-foreground/50" />
      </div>
      <GoalSetPage setSettingOpen={setSettingOpen} />
    </GoalSetDialog>
  );
};

export default GoalSetButton;
