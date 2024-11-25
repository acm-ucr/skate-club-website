import SkeletonSkatingCalendar from "@/components/calendar/SkeletonSkatingCalendar";
import SkateCalendar from "@/components/calendar/SkateCalendar";
import CalendarHeader from "@/components/calendar/CalendarHeader";

const page = () => {
  return (
    <div className="flex w-full flex-col gap-10">
      <CalendarHeader />
      <SkateCalendar />
      <SkeletonSkatingCalendar />
    </div>
  );
};

export default page;
