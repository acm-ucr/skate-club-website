import React from "react";
import { Calendar } from "../ui/calendar";

const CalendarThingy = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <Calendar className="h-screen" />
    </div>
  );
};

export default CalendarThingy;
