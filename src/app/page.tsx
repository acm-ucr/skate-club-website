import SkeletonSkater from "@/components/home/SkeletonSkater";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <SkeletonSkater />
      <Footer />
    </div>
  );
};

export default Home;
