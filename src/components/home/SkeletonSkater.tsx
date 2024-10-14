import React from "react";
import Image from "next/image";
import skeletonSkater from "../../public/images/Skater.svg";
import ramp from "../../public/images/Ramp.svg";

export default function SkeletonSkater() {
  return (
    <div>
      <Image
        src={ramp}
        alt="skating ramp"
        className="items-left absolute w-full -translate-x-[550px] -translate-y-40 object-cover"
      />
      <Image
        src={skeletonSkater}
        alt="skating skeleton"
        className="rotate-315 absolute size-80 -translate-x-96 -translate-y-72"
      />
    </div>
  );
}
