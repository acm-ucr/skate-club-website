import React from "react";
import Image from "next/image";
import ramp from "@/public/assets/FullRamp.svg";
import Dino1 from "@/public/assets/Dino1.svg";
import Dino2 from "@/public/assets/Dino2.svg";
import Dino3 from "@/public/assets/Dino3.svg";

export default function DinoSkaters() {
  return (
    <div className="flex h-full w-full flex-col items-center pt-52">
      <Image
        src={Dino1}
        alt="skating dino"
        className="absolute z-10 w-7/12 -translate-x-12 -translate-y-48"
      />
      <Image
        src={Dino2}
        alt="skating dino"
        className="absolute z-10 w-64 translate-x-40 translate-y-6 object-cover"
      />
      <Image
        src={Dino3}
        alt="skating dino"
        className="absolute right-0 z-10 w-60 -translate-x-16 -translate-y-60 object-cover"
      />
      <Image
        src={ramp}
        alt="skating ramp"
        className="relative bottom-0 z-0 w-full object-cover object-center"
      />
    </div>
  );
}
