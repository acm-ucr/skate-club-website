//import AboutUsText from "@/components/about/AboutUsText";
import AboutUsText from "@/components/about/AboutUsText";
import DinoSkaters from "@/components/about/DinoSkaters";

const page = () => {
  return (
    <div className="flex w-full flex-col gap-10 py-20">
      <AboutUsText />
      <DinoSkaters />
    </div>
  );
};

export default page;
