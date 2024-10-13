"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function GoalCalendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "flex items-center justify-center px-1 py-2 pt-1 w-full max-w-full bg-white rounded-sm",
        className
      )}
      classNames={{
        months: "flex flex-col",
        month: "",
        caption: "hidden",
        caption_label: "hidden",
        nav: "hidden",
        nav_button: "hidden",
        nav_button_previous: "hidden",
        nav_button_next: "hidden",
        table: "border-collapse w-full",
        head_row: "hidden",
        head_cell: "hidden",
        row: "flex w-full mt-1",
        cell: "h-5 w-5 text-center text-muted-foreground/70 text-[10px] p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          "h-5 w-5 p-0 font-bold flex items-center justify-center text-[10px]  aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected: ``,
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      {...props}
    />
  );
}

GoalCalendar.displayName = "GoalCalendar";

export { GoalCalendar };
