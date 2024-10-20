"use client";

import * as React from "react";
import GoalCard from "./GoalCard";
import GoalSetButton from "./GoalSetButton";

export interface setSettingOpenProps {
  setSettingOpen: (value: boolean) => void;
}
export interface ModalOpenProps {
  setSettingOpen: (value: boolean) => void;
  setDetailOpen: (value: boolean) => void;
}
export interface GoalSetProps {
  settingOpen: boolean;
  setSettingOpen: (value: boolean) => void;
}

const GoalPage = () => {
  const [settingOpen, setSettingOpen] = React.useState(false);
  return (
    <div className="grid grid-cols-2 gap-2 justify-between p-3 pb-24">
      <GoalCard color="bg-blue-400" goalText="朝ご飯を食べる" count={12} />
      <GoalCard color="bg-orange-400" goalText="昼ご飯を食べる" count={8} />
      <GoalSetButton
        settingOpen={settingOpen}
        setSettingOpen={setSettingOpen}
      />
    </div>
  );
};

export default GoalPage;
