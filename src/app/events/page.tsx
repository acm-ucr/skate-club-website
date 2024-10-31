import SkeletonSkatingCalendar from "@/components/calendar/SkeletonSkatingCalendar";

const page = () => {
  return (
    <div className="flex w-full flex-col gap-10">
      <SkeletonSkatingCalendar />
      Events Page
    </div>
  );
};

export default page;
