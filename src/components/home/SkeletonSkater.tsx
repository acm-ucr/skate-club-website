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
        className="rotate-315 absolute bottom-6 size-1/2 -translate-x-14 -translate-y-12 md:bottom-0 md:left-20 md:-translate-y-96 md:translate-x-0"
      />
      <Image
        src={ramp}
        alt="skating ramp"
        className="bottom-0 size-full w-full object-center"
      />
    </div>
  );
}
