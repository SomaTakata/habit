"use client";

import * as React from "react";
import { SettingsDetailDialog } from "./SettingsModal";
import SettingsDetailPage from "./SettingsPage";
import { Settings } from "lucide-react";

const SettingsDetailButton = () => {
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  return (
    <SettingsDetailDialog open={settingsOpen} onOpenChange={setSettingsOpen}>
      <Settings
        onClick={() => setSettingsOpen && setSettingsOpen(true)}
        className="text-muted-foreground"
      />

      <SettingsDetailPage setSettingsOpen={setSettingsOpen} />
    </SettingsDetailDialog>
  );
};

export default SettingsDetailButton;
