import React from "react";
import Image from "next/image";
import Ghost from "@/public/Ghost.svg";
import GalleryRamp from "@/public/GalleryRamp.svg";

const GhostSkaterGallery = () => {
  return (
    <div className="relative flex w-full">
      <Image src={GalleryRamp} alt="skating ramp" className="w-full" />
      <Image
        src={Ghost}
        alt="skating ghost"
        className="rotate-315 absolute -top-1/2 left-1/4 w-1/6"
      />
    </div>
  );
};

export default GhostSkaterGallery;
