import SkeletonSkatingCalendar from "@/components/calendar/SkeletonSkatingCalendar";
import CalendarHeader from "@/components/calendar/CalendarHeader";

const page = () => {
  return (
    <div className="flex w-full flex-col gap-10">
      <CalendarHeader />
      <SkeletonSkatingCalendar />
    </div>
  );
};

export default page;
