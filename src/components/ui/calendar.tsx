"use client";

import * as React from "react";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";

import { DayPicker, DateFormatter } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const formatWeekdayLabel: DateFormatter = (day) => {
    const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return weekdays[day.getDay()];
  };

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      formatters={{
        formatWeekdayName: formatWeekdayLabel,
      }}
      className={cn("p-4 sm:p-6", className)}
      classNames={{
        months:
          "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 text-white text-6xl",
        month: "space-y-4",
        caption:
          "flex justify-center pt-1 mb-10 sm:mb-16 relative items-center",
        caption_label: "text-4xl sm:text-6xl font-light font-banco",
        nav: "space-x-1 flex items-center",
        nav_button: cn("p-0 opacity-100 hover:opacity-50"),
        nav_button_previous: "absolute left-0",
        nav_button_next: "absolute right-0",
        table: "w-full border-collapse space-y-0 justify-center",
        head_row: "flex justify-center",
        head_cell:
          "border border-white w-16 sm:w-32 font-normal text-[1.2rem] sm:text-[1.6rem] font-bangers",
        row: "flex w-full mt-0",
        cell: cn(
          "h-16 w-16 sm:h-32 sm:w-32 border border-white relative text-5xl sm:text-9xl p-0 justify-center focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md",
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "font-balooThambi text-lg h-8 w-8 sm:h-10 sm:w-10 p-0 font-normal aria-selected:opacity-100",
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "h-16 w-16 sm:h-32 sm:w-32 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => <BiLeftArrow className="h-10 w-10 sm:h-20 sm:w-20" />,
        IconRight: () => <BiRightArrow className="h-10 w-10 sm:h-20 sm:w-20" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
