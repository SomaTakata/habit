"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { GoalSetDialog, GoalSetDialogTrigger } from "./GoalSetModal";
import GoalSetPage from "./GoalSetPage";

const GoalSetButton = () => {
  return (
    <GoalSetDialog>
      <GoalSetDialogTrigger>
        <div
          onClick={() => {}}
          className="border-2 border-border w-full h-[218px] rounded-md flex items-center justify-center"
        >
          <Plus size={40} className="text-muted-foreground/50" />
        </div>
      </GoalSetDialogTrigger>
      <GoalSetPage />
    </GoalSetDialog>
  );
};

export default GoalSetButton;
