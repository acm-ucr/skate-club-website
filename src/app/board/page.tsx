import MeetTheBoard from "@/components/board/MeetTheBoard";
import Boards from "@/components/board/Boards";

const page = () => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-10 bg-black">
      <MeetTheBoard />
      <Boards />
    </div>
  );
};

export default page;
