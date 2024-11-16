import React from "react";
import BoardCard from "./BoardCard";
import { Members } from "@/data/BoardMembers.js";

const Boards = () => {
  const sortedMembers = [...Members].sort((a, b) => a.key - b.key);

  return (
    <div className="grid grid-cols-2 gap-3 px-20 pb-10 md:grid-cols-3 md:gap-10 md:px-40 lg:grid-cols-4 lg:px-60">
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
