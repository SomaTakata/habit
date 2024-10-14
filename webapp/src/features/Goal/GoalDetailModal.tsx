"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft } from "lucide-react";

import { cn } from "@/lib/utils";

const GoalDetailDialog = DialogPrimitive.Root;

const GoalDetailDialogTrigger = DialogPrimitive.Trigger;

const GoalDetailDialogPortal = DialogPrimitive.Portal;

const GoalDetailDialogClose = DialogPrimitive.Close;

const GoalDetailDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <GoalDetailDialogPortal>
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-0 top-0 z-50 grid w-full gap-4 border bg-background p-6  duration-700 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right  ",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute left-5 top-5 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <ChevronLeft className="h-7 w-7" />
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </GoalDetailDialogPortal>
));
GoalDetailDialogContent.displayName = DialogPrimitive.Content.displayName;

export {
  GoalDetailDialog,
  GoalDetailDialogPortal,
  GoalDetailDialogClose,
  GoalDetailDialogTrigger,
  GoalDetailDialogContent,
};
