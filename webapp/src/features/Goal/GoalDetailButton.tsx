"use client";

import * as React from "react";
import { GoalDetailDialog, GoalDetailDialogTrigger } from "./GoalDetailModal";
import { Button } from "@/components/ui/button";
import GoalDetailPage from "./GoalDetailPage";

const GoalDetailButton = () => {
  return (
    <GoalDetailDialog>
      <GoalDetailDialogTrigger>
        <Button variant="natural" className="px-10">
          完了
        </Button>
      </GoalDetailDialogTrigger>
      <GoalDetailPage />
    </GoalDetailDialog>
  );
};

export default GoalDetailButton;
