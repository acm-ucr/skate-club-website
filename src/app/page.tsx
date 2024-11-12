import SkeletonSkater from "@/components/home/SkeletonSkater";

const Home = () => {
  return (
    <div className="my-10 mt-40 flex h-screen w-screen flex-col items-center justify-center bottom-0">
        <SkeletonSkater />
    </div>
  );
};

export default Home;
