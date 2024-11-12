import GalleryHeader from "@/components/gallery/GalleryHeader";
import GhostSkaterGallery from "@/components/gallery/GhostSkaterGallery";

const page = () => {
  return (
    <>
      <div className="flex w-full flex-col gap-10 font-normal">
        <div>Gallery Page</div>
        <GalleryHeader />
        <GhostSkaterGallery />
      </div>
    </>
  );
};

export default page;
