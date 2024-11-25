import AboutUsText from "@/components/about/AboutUsText";
import AboutUs from "@/components/about/AboutUs";

const page = () => {
  return (
    <div className="flex h-full w-full flex-col gap-10 py-6">
      <AboutUs />
      <AboutUsText />
    </div>
  );
};

export default page;
