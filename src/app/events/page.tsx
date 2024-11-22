import SkeletonSkatingCalendar from "@/components/calendar/SkeletonSkatingCalendar";
import CalendarThingy from "@/components/calendar/CalendarThingy";

const page = () => {
  return (
    <div className="flex w-full flex-col gap-10">
      <CalendarThingy />
      <SkeletonSkatingCalendar />
      Events Page
    </div>
  );
};

export default page;
