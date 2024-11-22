import React from "react";
import Image from "next/image";
//import CalendarRamp from "../../../public/assets/CalendarRamp.svg";
//import CalendarSkater from "../../../public/assets/CalendarSkeleton.svg";
import BetterCalendarThingy from "../../../public/assets/BetterCalendarThingy.svg";

const SkeletonSkaterCalendar = () => {
  return (
    <div className="-mb-20 mt-[10%] flex justify-center">
      <Image src={BetterCalendarThingy} alt="better" className="w-full" />
    </div>
  );
};

export default SkeletonSkaterCalendar;
