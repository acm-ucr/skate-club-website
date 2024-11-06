import SkeletonSkater from "@/components/home/SkeletonSkater";
import Footer from "@/components/footer";
import JoinNow from "@/components/home/JoinNow";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <JoinNow />
      <SkeletonSkater />
      <Footer />
    </div>
  );
};

export default Home;
