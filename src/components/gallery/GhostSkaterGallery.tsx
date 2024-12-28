import React from "react";
import Image from "next/image";
import Ghost from "@/public/assets/Ghost.svg";
import GalleryRamp from "@/public/assets/GalleryRamp.svg";

const GhostSkaterGallery = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-28 md:p-0 lg:pt-28">
      <Image
        src={Ghost}
        alt="skating ghost"
        className="bottom-10 z-10 size-[25%] -rotate-12 translate-y-[30%] transform object-center lg:-rotate-12 lg:bottom-56 lg:size-[15%] lg:translate-y-[47%]"
      />
      <Image
        src={GalleryRamp}
        alt="skating ramp"
        className="bottom-0 w-full translate-y-[0%] object-center lg:translate-y-[0%]"
      />
    </div>
  );
};

export default GhostSkaterGallery;







