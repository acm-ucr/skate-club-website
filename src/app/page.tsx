import SkeletonSkater from "@/components/home/SkeletonSkater";
import HomeImages from "@/components/home/HomeImages";
import HomeHeader from "@/components/home/HomeHeader";

const Home = () => {
  return (
    <div className="bottom-0 my-10 mt-10 flex h-full w-full flex-col items-center justify-center">
      <HomeHeader />
      <HomeImages />
      <SkeletonSkater />
    </div>
  );
};

export default Home;
