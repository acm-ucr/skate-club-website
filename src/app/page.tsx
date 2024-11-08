import SkeletonSkater from "@/components/home/SkeletonSkater";
//import Footer from "@/components/footer";

const Home = () => {
  return (
    <div className="my-10 mt-40 flex h-screen w-screen flex-col items-center justify-center">
      <div className="mt-20">
        {" "}
        <SkeletonSkater />{" "}
      </div>
    </div>
  );
};

export default Home;
