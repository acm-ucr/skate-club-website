import React from "react";
import Image from "next/image";
import Ghost from "../../public/images/Ghost.svg";
import ramp from "../../public/images/Ramp.svg";

const GhostSkaterGallery = () => {
  return (
    <div className="relative flex w-full">
      <Image src={ramp} alt="skating ramp" className="w-full" />
      <Image
        src={Ghost}
        alt="skating ghost"
        className="rotate-315 absolute left-1/4 w-1/6"
      />
    </div>
  );
};

export default GhostSkaterGallery;
