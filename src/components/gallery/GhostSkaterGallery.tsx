import React from "react";
import Image from "next/image";
import Ghost from "@/public/assets/Ghost.svg";
import GalleryRamp from "@/public/assets/GalleryRamp.svg";

const GhostSkaterGallery = () => {
  return (
    <div className="flex w-full flex-col-reverse items-center">
      <Image src={GalleryRamp} alt="skating ramp" className="-mt-40 w-full" />
      <div className="flex">
        <Image src={Ghost} alt="skating ghost" className="size-full" />
      </div>
    </div>
  );
};

export default GhostSkaterGallery;
