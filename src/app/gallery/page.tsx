import GalleryHeader from "@/components/gallery/GalleryHeader";
import GhostSkaterGallery from "@/components/gallery/GhostSkaterGallery";

const page = () => {
  return (
    <>
      <div className="mt-60 flex w-full flex-col gap-10 font-normal">
        <GalleryHeader />
        <GhostSkaterGallery />
      </div>
    </>
  );
};

export default page;
