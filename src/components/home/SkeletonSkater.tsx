import React from "react";
import Image from "next/image";
import skeletonSkater from "@/public/assets/Skater.svg";
import ramp from "@/public/assets/Ramp.svg";

export default function SkeletonSkater() {
  return (
    <div className="flex h-full w-full translate-y-[21%] flex-col items-center md:translate-y-[15%]">
      <Image
        src={skeletonSkater}
        alt="skating skeleton"
        className="size-[35%] -translate-x-24 translate-y-10 rotate-2 md:bottom-0 md:size-[27%] md:-translate-x-[85%] md:translate-y-[43%]"
      />
      <Image
        src={ramp}
        alt="skating ramp"
        className="size-full w-full object-center"
      />
    </div>
  );
}
