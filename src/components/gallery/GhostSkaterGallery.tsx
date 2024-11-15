import React from "react";
import Image from "next/image";
import Ghost from "@/public/assets/Ghost.svg";
import GalleryRamp from "@/public/assets/GalleryRamp.svg";

const GhostSkaterGallery = () => {
  return (
    <div className="flex flex-col-reverse w-full items-center">
      <Image src={GalleryRamp} alt="skating ramp" className="w-full -mt-40" />
      <div className="flex">
        <Image src={Ghost} alt="skating ghost" className="size-full" />
      </div>
    </div>
  );
};

export default GhostSkaterGallery;
