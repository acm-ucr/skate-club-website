import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  position: string;
  name: string;
  year: number;
  major: string;
  yearsSkating: string;
  favoriteSkater: string;
  boardImage: StaticImageData;
};

const BoardCard: React.FC<Props> = ({
  name,
  position,
  yearsSkating,
  year,
  major,
  favoriteSkater,
  boardImage,
}) => {
  return (
    <div className="h-90 w-45 relative flex flex-col rounded-md bg-[#d9d9d9] p-3">
      <div className="relative h-32 w-full">
        <Image
          src={boardImage}
          alt={`Photo of ${name}, ${position}`}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="relative mt-1 text-left font-bangers text-sm">
        <div className="text-3xl font-bold">{name}</div>
        <div className="text-lg">{position}</div>
        <div>Year: {year}</div>
        <div>Major: {major}</div>
        <div>Years Skating: {yearsSkating}</div>
        <div>Favorite Skater: {favoriteSkater}</div>
      </div>
    </div>
  );
};

export default BoardCard;
