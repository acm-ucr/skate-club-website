import React from "react";
import BoardCard from "./BoardCard";
import { Members } from "@/data/BoardMembers.js";

const Boards = () => {
  const sortedMembers = [...Members].sort((a, b) => a.key - b.key);

  return (
    <div className="grid w-4/5 grid-cols-2 items-center gap-3 pb-10 lg:h-full lg:w-4/5 lg:grid-cols-4">
      {sortedMembers.map((member) => (
        <BoardCard
          position={member.position}
          name={member.name}
          year={member.year}
          major={member.major}
          yearsSkating={member.yearsSkating}
          favoriteSkater={member.favoriteSkater}
          boardImage={member.image}
          key={member.key}
        />
      ))}
    </div>
  );
};

export default Boards;
