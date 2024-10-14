import SkeletonSkater from "@/components/home/SkeletonSkater";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <SkeletonSkater />
      <div className="text-white">Hello World</div>
    </div>
  );
};

export default Home;
