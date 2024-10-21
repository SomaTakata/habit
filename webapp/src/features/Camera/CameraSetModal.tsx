"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft } from "lucide-react";

import { cn } from "@/lib/utils";

const CameraSetDialog = DialogPrimitive.Root;

const CameraSetDialogTrigger = DialogPrimitive.Trigger;

const CameraSetDialogPortal = DialogPrimitive.Portal;

const CameraSetDialogClose = DialogPrimitive.Close;

const CameraSetDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <CameraSetDialogPortal>
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-0 top-0 z-50 grid w-full gap-4 border bg-background p-6 duration-700 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right  ",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute left-5 top-5 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <ChevronLeft className="h-7 w-7" />
      </DialogPrimitive.Close>
      <div className="w-full absolute top-5 text-2xl font-bold justify-center text-center">
        HabitLink
      </div>
    </DialogPrimitive.Content>
  </CameraSetDialogPortal>
));
CameraSetDialogContent.displayName = DialogPrimitive.Content.displayName;

export {
  CameraSetDialog,
  CameraSetDialogPortal,
  CameraSetDialogClose,
  CameraSetDialogTrigger,
  CameraSetDialogContent,
};
