"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const NotificationTabs = TabsPrimitive.Root;

const NotificationTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-background border p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
));
NotificationTabsList.displayName = TabsPrimitive.List.displayName;

const NotificationTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex w-full items-center justify-center whitespace-nowrap rounded-sm px-8 py-1 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-muted-foreground data-[state=active]:text-background",
      className
    )}
    {...props}
  />
));
NotificationTabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const NotificationTabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
NotificationTabsContent.displayName = TabsPrimitive.Content.displayName;

export {
  NotificationTabs,
  NotificationTabsList,
  NotificationTabsTrigger,
  NotificationTabsContent,
};
