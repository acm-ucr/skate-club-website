import Gallery from "@/components/gallery/Gallery";

const page = () => {
  return (
    <>
      <div className="flex w-full flex-col gap-10 font-normal">
        Gallery Page
      </div>
      <div>
        <Gallery />
      </div>
    </>
  );
};

export default page;
