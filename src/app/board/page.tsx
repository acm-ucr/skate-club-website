import MeetTheBoard from "@/components/board/MeetTheBoard";
import Boards from "@/components/board/Boards";
import BoardsSkater from "@/components/board/BoardsSkater";

const page = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between gap-10 bg-black">
      <MeetTheBoard />
      <Boards />
      <BoardsSkater />
    </div>
  );
};

export default page;
