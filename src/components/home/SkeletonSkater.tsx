import React from "react";
import Image from "next/image";
import skeletonSkater from "@/public/assets/Skater.svg";
import ramp from "@/public/assets/Ramp.svg";

export default function SkeletonSkater() {
  return (
    <div className="bottom-0 flex h-full w-full flex-col items-center">
      <Image
        src={skeletonSkater}
        alt="skating skeleton"
        className="bottom-0 size-[27%] -translate-x-14 -translate-y-12 rotate-2 md:bottom-0 md:-translate-x-[85%] md:translate-y-[43%]"
      />
      <Image
        src={ramp}
        alt="skating ramp"
        className="bottom-0 size-full w-full object-center"
      />
    </div>
  );
}
