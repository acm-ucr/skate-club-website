import React from "react";
import Image from "next/image";
import Ramp from "@/public/assets/GalleryRamp.svg";
import Droopy from "@/public/assets/Droopy.svg";

export default function BoardsSkater() {
  return (
    <div className="relative w-full">
      <Image
        src={Ramp}
        alt="skating ramp"
        className="absolute bottom-0 w-full"
      />
      <Image
        src={Droopy}
        alt="skating ghost"
        className="absolute bottom-0 w-1/4 -translate-y-2/3 translate-x-2/3 transform lg:w-[10%] lg:-translate-y-[175%] lg:translate-x-[225%]"
      />
    </div>
  );
}
