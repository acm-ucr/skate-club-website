import React from "react";
import Image from "next/image";
import skeletonSkater from "@/public/assets/Skater.svg";
import ramp from "@/public/assets/Ramp.svg";

export default function SkeletonSkater() {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <Image
        src={skeletonSkater}
        alt="skating skeleton"
        className="rotate-315 absolute left-20 size-1/2"
      />
      <Image
        src={ramp}
        alt="skating ramp"
        className="absolute bottom-0 w-full object-cover object-center"
      />
    </div>
  );
}
