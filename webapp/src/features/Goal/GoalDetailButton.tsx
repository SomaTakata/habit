"use client";

import * as React from "react";
import { GoalDetailDialog } from "./GoalDetailModal";
import { Button } from "@/components/ui/button";
import GoalDetailPage from "./GoalDetailPage";
import { setSettingOpenProps } from "./GoalPage";

const GoalDetailButton = ({ setSettingOpen }: setSettingOpenProps) => {
  const [detailOpen, setDetailOpen] = React.useState(false);
  return (
    <GoalDetailDialog open={detailOpen} onOpenChange={setDetailOpen}>
      <Button
        variant="natural"
        className="px-10"
        onClick={() => setDetailOpen && setDetailOpen(true)}
      >
        完了
      </Button>
      <GoalDetailPage
        setDetailOpen={setDetailOpen}
        setSettingOpen={setSettingOpen}
      />
    </GoalDetailDialog>
  );
};

export default GoalDetailButton;
