"use client";

import * as React from "react";
import { CameraSetDialog } from "./CameraSetModal";
import CameraSetPage from "./CameraSetPage";

const CameraSetButton = () => {
  const [CameraSetOpen, setCameraSetOpen] = React.useState(false);
  return (
    <CameraSetDialog open={CameraSetOpen} onOpenChange={setCameraSetOpen}>
      <div className="flex w-full justify-center pt-10">
        <button
          onClick={() => setCameraSetOpen && setCameraSetOpen(true)}
          className="h-16 w-16 rounded-full border-4"
        ></button>
      </div>
      <CameraSetPage />
    </CameraSetDialog>
  );
};

export default CameraSetButton;
