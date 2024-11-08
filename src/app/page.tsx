import SkeletonSkater from "@/components/home/SkeletonSkater";
//import Footer from "@/components/footer";

const Home = () => {
  return (
    <div className="flex flex-col mt-40 h-screen w-screen items-center my-10 justify-center">
      <div className="mt-20">  <SkeletonSkater /> </div>
     
    </div>
  )
};

export default Home;
