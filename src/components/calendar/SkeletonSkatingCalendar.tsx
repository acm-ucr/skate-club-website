import React from "react";
import Image from "next/image";
import CalendarRamp from "../../../public/assets/CalendarRamp.svg";
import CalendarSkater from "../../../public/assets/CalendarSkeleton.svg";

const SkeletonSkaterCalendar = () => {
  return (
    <div className="flex justify-center">
      <Image
        src={CalendarRamp}
        alt="skating ramp"
        className="absolute bottom-0 w-full object-center"
      />

      <Image
        src={CalendarSkater}
        alt="skating skeleton"
        className="absolute bottom-10 left-1/2 z-10 size-1/4 -translate-x-1/2 transform object-center md:bottom-28 lg:bottom-56 lg:size-1/2"
      />
    </div>
  );
};

export default SkeletonSkaterCalendar;
