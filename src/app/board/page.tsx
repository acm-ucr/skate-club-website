import MeetTheBoard from "@/components/board/MeetTheBoard";
import Boards from "@/components/board/Boards";
import BoardsSkater from "@/components/board/BoardsSkater";

const page = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between gap-10 bg-black">
      <MeetTheBoard />
      <Boards />
      <div className="pt-32 lg:h-96 lg:pt-[40%]"></div>
      <BoardsSkater />
    </div>
  );
};

export default page;
