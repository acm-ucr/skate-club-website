import React from "react";
import Image from "next/image";
import Ghost from "../../public/images/Ghost.svg";
import ramp from "../../public/images/Ramp.svg";

const GhostSkaterGallery = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="relative">
        <Image
          src={Ghost}
          alt="skating ghost"
          className="rotate-315 absolute -translate-y-10 translate-x-3/4"
        />
        <Image
          src={ramp}
          alt="skating ramp"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default GhostSkaterGallery;
