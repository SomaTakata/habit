"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft } from "lucide-react";

import { cn } from "@/lib/utils";

const SettingsDetailDialog = DialogPrimitive.Root;

const SettingsDetailDialogTrigger = DialogPrimitive.Trigger;

const SettingsDetailDialogPortal = DialogPrimitive.Portal;

const SettingsDetailDialogClose = DialogPrimitive.Close;

const SettingsDetailDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <SettingsDetailDialogPortal>
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-0 top-0 z-50 grid w-full gap-4 border bg-background p-6  duration-1000 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right  ",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute left-5 top-5 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <ChevronLeft className="h-7 w-7" />
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </SettingsDetailDialogPortal>
));
SettingsDetailDialogContent.displayName = DialogPrimitive.Content.displayName;

export {
  SettingsDetailDialog,
  SettingsDetailDialogPortal,
  SettingsDetailDialogClose,
  SettingsDetailDialogTrigger,
  SettingsDetailDialogContent,
};
