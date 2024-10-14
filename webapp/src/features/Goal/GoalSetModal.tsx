"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const GoalSetDialog = DialogPrimitive.Root;

const GoalSetDialogTrigger = DialogPrimitive.Trigger;

const GoalSetDialogPortal = DialogPrimitive.Portal;

const GoalSetDialogClose = DialogPrimitive.Close;

const GoalSetDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <GoalSetDialogPortal>
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 w-full translate-x-[-50%] translate-y-[-50%]  bg-background p-6 duration-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-6 top-5 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-7 w-7" />
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </GoalSetDialogPortal>
));
GoalSetDialogContent.displayName = DialogPrimitive.Content.displayName;

export {
  GoalSetDialog,
  GoalSetDialogPortal,
  GoalSetDialogClose,
  GoalSetDialogTrigger,
  GoalSetDialogContent,
};
