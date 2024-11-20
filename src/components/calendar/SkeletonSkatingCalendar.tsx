import React from "react";
import Image from "next/image";
import CalendarRamp from "../../../public/assets/CalendarRamp.svg";
import CalendarSkater from "../../../public/assets/CalendarSkeleton.svg";

const SkeletonSkaterCalendar = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={CalendarSkater}
        alt="skating skeleton"
        className="bottom-10 z-10 size-1/4 translate-y-[170%] transform object-center lg:bottom-56 lg:size-1/6 lg:translate-y-[90%]"
      />
      <Image
        src={CalendarRamp}
        alt="skating ramp"
        className="bottom-0 w-full translate-y-[210%] object-center lg:translate-y-[50%]"
      />
    </div>
  );
};

export default SkeletonSkaterCalendar;
