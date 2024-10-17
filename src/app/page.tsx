import SkeletonSkater from "@/components/home/SkeletonSkater";
import Footer from "@/components/footer";
const Home = () => {
  return (
    <div className="flex flex-col bg-black">
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
        <SkeletonSkater />
        <div className="text-white">Hello World</div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
