import React from "react";
import Image from "next/image";
import skeletonSkater from "../../public/images/Skater.svg";
import ramp from "../../public/images/Ramp.svg";

export default function SkeletonSkater() {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <Image
        src={skeletonSkater}
        alt="skating skeleton"
        className="rotate-315 bottom-0 size-1/2"
      />
      <Image
        src={ramp}
        alt="skating ramp"
        className="bottom-0 size-full w-full object-center"
      />
    </div>
  );
}
