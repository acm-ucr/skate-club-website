"use client";
import { Gallery } from "react-grid-gallery";

import GalleryHeader from "@/components/gallery/GalleryHeader";
import GhostSkaterGallery from "@/components/gallery/GhostSkaterGallery";

// Importing all images
import image1 from "@/public/gallery/image1.webp";
// import image2 from "@/public/gallery/image2.JPG";
// import image3 from "@/public/gallery/image3.JPG";
// import image4 from "@/public/gallery/image4.JPG";
import image8 from "@/public/gallery/image8.webp";
import image9 from "@/public/gallery/image9.webp";
import image10 from "@/public/gallery/image10.webp";
import image11 from "@/public/gallery/image11.webp";
import image12 from "@/public/gallery/image12.webp";
import image13 from "@/public/gallery/image13.webp";
import image16 from "@/public/gallery/image16.webp";
// import image17 from "@/public/gallery/image17.JPG";
import image18 from "@/public/gallery/image18.webp";
// import image19 from "@/public/gallery/image19.JPG";
import image20 from "@/public/gallery/image20.webp";
// import image21 from "@/public/gallery/image21.JPG";
import image22 from "@/public/gallery/image22.webp";
// import image23 from "@/public/gallery/image23.JPG";
// import image24 from "@/public/gallery/image24.JPG";
import image25 from "@/public/gallery/image25.webp";
import image26 from "@/public/gallery/image26.webp";
// import image27 from "@/public/gallery/image27.JPG";
// import image28 from "@/public/gallery/image28.JPG";
import image29 from "@/public/gallery/image29.webp";
import image30 from "@/public/gallery/image30.webp";
// import image31 from "@/public/gallery/image31.JPG";
// import image32 from "@/public/gallery/image32.JPG";
import image33 from "@/public/gallery/image33.webp";
// import image34 from "@/public/gallery/image34.JPG";
import image35 from "@/public/gallery/image35.webp";
// import image36 from "@/public/gallery/image36.JPG";
import image37 from "@/public/gallery/image37.webp";
// import image38 from "@/public/gallery/image38.JPG";
import image39 from "@/public/gallery/image39.webp";
// import image40 from "@/public/gallery/image40.JPG";
// import image41 from "@/public/gallery/image41.JPG";
import image42 from "@/public/gallery/image42.webp";
import image43 from "@/public/gallery/image43.webp";
import image44 from "@/public/gallery/image44.webp";
// import image45 from "@/public/gallery/image45.JPG";
import image46 from "@/public/gallery/image46.webp";
// import image47 from "@/public/gallery/image47.JPG";
import image48 from "@/public/gallery/image48.webp";
// import image49 from "@/public/gallery/image49.JPG";
import image50 from "@/public/gallery/image50.webp";
import image51 from "@/public/gallery/image51.webp";
// import image52 from "@/public/gallery/image52.JPG";
import image53 from "@/public/gallery/image53.webp";
// import image54 from "@/public/gallery/image54.JPG";
import image55 from "@/public/gallery/image55.webp";
// import image56 from "@/public/gallery/image56.JPG";
import image57 from "@/public/gallery/image57.webp";
// import image58 from "@/public/gallery/image58.JPG";
import image59 from "@/public/gallery/image59.webp";
import image60 from "@/public/gallery/image60.webp";
// import image61 from "@/public/gallery/image61.JPG";
import image62 from "@/public/gallery/image62.webp";
import image63 from "@/public/gallery/image63.webp";
// import image64 from "@/public/gallery/image64.JPG";
import image65 from "@/public/gallery/image65.webp";
import image66 from "@/public/gallery/image66.webp";
// import image67 from "@/public/gallery/image67.JPG";
import image68 from "@/public/gallery/image68.webp";
import image69 from "@/public/gallery/image69.webp";
// import image70 from "@/public/gallery/image70.JPG";
// import image71 from "@/public/gallery/image71.JPG";
import image72 from "@/public/gallery/image72.webp";
// import image73 from "@/public/gallery/image73.JPG";
import image74 from "@/public/gallery/image74.webp";
import image75 from "@/public/gallery/image75.webp";
// import image76 from "@/public/gallery/image76.JPG";
import image77 from "@/public/gallery/image77.webp";
import image78 from "@/public/gallery/image78.webp";
import image79 from "@/public/gallery/image79.webp";
import image80 from "@/public/gallery/image80.webp";
// import image81 from "@/public/gallery/image81.JPG";
import image82 from "@/public/gallery/image82.webp";
import image83 from "@/public/gallery/image83.webp";
import image84 from "@/public/gallery/image84.webp";
// import image85 from "@/public/gallery/image85.JPG";
// import image86 from "@/public/gallery/image86.JPG";
import image87 from "@/public/gallery/image87.webp";
// import image88 from "@/public/gallery/image88.JPG";
import image89 from "@/public/gallery/image89.webp";
// import image90 from "@/public/gallery/image90.JPG";
import image91 from "@/public/gallery/image91.webp";
// import image92 from "@/public/gallery/image92.JPG";
// import image93 from "@/public/gallery/image93.JPG";
// import image94 from "@/public/gallery/image94.JPG";
// import image95 from "@/public/gallery/image95.JPG";
// import image96 from "@/public/gallery/image96.JPG";
// import image97 from "@/public/gallery/image97.JPG";
import image98 from "@/public/gallery/image98.webp";
import image99 from "@/public/gallery/image99.webp";
import image100 from "@/public/gallery/image100.webp";
import image101 from "@/public/gallery/image101.webp";
import image102 from "@/public/gallery/image102.webp";
// import image103 from "@/public/gallery/image103.JPG";
// import image104 from "@/public/gallery/image104.JPG";
// import image105 from "@/public/gallery/image105.JPG";
import image106 from "@/public/gallery/image106.webp";
// import image107 from "@/public/gallery/image107.JPG";
// import image108 from "@/public/gallery/image108.JPG";
// import image109 from "@/public/gallery/image109.JPG";
// import image110 from "@/public/gallery/image110.JPG";
// import image111 from "@/public/gallery/image111.JPG";
import image112 from "@/public/gallery/image112.webp";
// import image113 from "@/public/gallery/image113.JPG";
// import image114 from "@/public/gallery/image114.JPG";
// import image115 from "@/public/gallery/image115.JPG";
// import image116 from "@/public/gallery/image116.JPG";
// import image117 from "@/public/gallery/image117.JPG";
// import image118 from "@/public/gallery/image118.JPG";
// import image119 from "@/public/gallery/image119.JPG";
import image120 from "@/public/gallery/image120.webp";
// import image121 from "@/public/gallery/image121.JPG";
// import image122 from "@/public/gallery/image122.JPG";
// import image123 from "@/public/gallery/image123.JPG";
// import image124 from "@/public/gallery/image124.JPG";
// import image125 from "@/public/gallery/image125.JPG";
// import image127 from "@/public/gallery/image127.JPG";
// import image128 from "@/public/gallery/image128.JPG";
// import image129 from "@/public/gallery/image129.JPG";
// import image130 from "@/public/gallery/image130.JPG";
// import image131 from "@/public/gallery/image131.JPG";
// import image132 from "@/public/gallery/image132.JPG";
// import image133 from "@/public/gallery/image133.JPG";
// import image134 from "@/public/gallery/image134.JPG";
import image135 from "@/public/gallery/image135.webp";
// import image136 from "@/public/gallery/image136.JPG";
import image137 from "@/public/gallery/image137.webp";
import image138 from "@/public/gallery/image138.webp";
import image139 from "@/public/gallery/image139.webp";
import image140 from "@/public/gallery/image140.webp";
import image141 from "@/public/gallery/image141.webp";
import image142 from "@/public/gallery/image142.webp";
import image143 from "@/public/gallery/image143.webp";
import image144 from "@/public/gallery/image144.webp";
import image145 from "@/public/gallery/image145.webp";
import image146 from "@/public/gallery/image146.webp";
import image147 from "@/public/gallery/image147.webp";
import image148 from "@/public/gallery/image148.webp";
import image149 from "@/public/gallery/image149.webp";
import image150 from "@/public/gallery/image150.webp";
import image151 from "@/public/gallery/image151.webp";
import image152 from "@/public/gallery/image152.webp";
import image154 from "@/public/gallery/image154.webp";
import image155 from "@/public/gallery/image155.webp";
import image156 from "@/public/gallery/image156.webp";
import image158 from "@/public/gallery/image158.webp";
import image160 from "@/public/gallery/image160.webp";
import image161 from "@/public/gallery/image161.webp";
import image162 from "@/public/gallery/image162.webp";
import image163 from "@/public/gallery/image163.webp";
import image164 from "@/public/gallery/image164.webp";
import image165 from "@/public/gallery/image165.webp";
import image166 from "@/public/gallery/image166.webp";
import image167 from "@/public/gallery/image167.webp";
import image168 from "@/public/gallery/image168.webp";
import image169 from "@/public/gallery/image169.webp";
import image170 from "@/public/gallery/image170.webp";
import image171 from "@/public/gallery/image171.webp";
import image172 from "@/public/gallery/image172.webp";
import image173 from "@/public/gallery/image173.webp";
import image174 from "@/public/gallery/image174.webp";
import image175 from "@/public/gallery/image175.webp";
import image176 from "@/public/gallery/image176.webp";
import image177 from "@/public/gallery/image177.webp";
import image178 from "@/public/gallery/image178.webp";
import image179 from "@/public/gallery/image179.webp";
import image180 from "@/public/gallery/image180.webp";
import image181 from "@/public/gallery/image181.webp";
import image182 from "@/public/gallery/image182.webp";
import image183 from "@/public/gallery/image183.webp";
import image184 from "@/public/gallery/image184.webp";
import image185 from "@/public/gallery/image185.webp";
import image186 from "@/public/gallery/image186.webp";
import image187 from "@/public/gallery/image187.webp";
import image188 from "@/public/gallery/image188.webp";
import image189 from "@/public/gallery/image189.webp";
import image190 from "@/public/gallery/image190.webp";
import image191 from "@/public/gallery/image191.webp";
import image192 from "@/public/gallery/image192.webp";
import image193 from "@/public/gallery/image193.webp";
import image194 from "@/public/gallery/image194.webp";
import image195 from "@/public/gallery/image195.webp";
import image196 from "@/public/gallery/image196.webp";
import image197 from "@/public/gallery/image197.webp";
import image198 from "@/public/gallery/image198.webp";
import image199 from "@/public/gallery/image199.webp";
import image200 from "@/public/gallery/image200.webp";
import image201 from "@/public/gallery/image201.webp";
import image202 from "@/public/gallery/image202.webp";
import image203 from "@/public/gallery/image203.webp";
import image204 from "@/public/gallery/image204.webp";
import image205 from "@/public/gallery/image205.webp";
import image206 from "@/public/gallery/image206.webp";
import image207 from "@/public/gallery/image207.webp";
// import image214 from "@/public/gallery/image214.JPG";
// import image215 from "@/public/gallery/image215.JPG";
// import image216 from "@/public/gallery/image216.JPG";
import image217 from "@/public/gallery/image217.webp";
// import image218 from "@/public/gallery/image218.JPG";
// import image219 from "@/public/gallery/image219.JPG";
// import image220 from "@/public/gallery/image220.JPG";
// import image221 from "@/public/gallery/image221.JPG";
// import image222 from "@/public/gallery/image222.JPG";
import image223 from "@/public/gallery/image223.webp";
import image224 from "@/public/gallery/image224.webp";
import image225 from "@/public/gallery/image225.webp";
// import image226 from "@/public/gallery/image226.JPG";
// import image227 from "@/public/gallery/image227.JPG";
// import image228 from "@/public/gallery/image228.JPG";
import image229 from "@/public/gallery/image229.webp";
import image230 from "@/public/gallery/image230.webp";
// import image231 from "@/public/gallery/image231.JPG";
// import image232 from "@/public/gallery/image232.JPG";
// import image233 from "@/public/gallery/image233.JPG";
// import image234 from "@/public/gallery/image234.JPG";
// import image235 from "@/public/gallery/image235.JPG";
// import image236 from "@/public/gallery/image236.JPG";
// import image237 from "@/public/gallery/image237.JPG";
// import image238 from "@/public/gallery/image238.JPG";
// import image239 from "@/public/gallery/image239.JPG";
// import image240 from "@/public/gallery/image240.JPG";
import image241 from "@/public/gallery/image241.webp";
import image242 from "@/public/gallery/image242.webp";

type ImageProps = {
  src: string;
  width: number;
  height: number;
  caption?: string;
  alt?: string;
};

const importedImages = [
  image1,
  // image2,
  // image3,
  // image4,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image16,
  // image17,
  image18,
  // image19,
  image20,
  // image21,
  image22,
  // image23,
  // image24,
  image25,
  image26,
  // image27,
  // image28,
  image29,
  image30,
  // image31,
  // image32,
  image33,
  // image34,
  image35,
  // image36,
  image37,
  // image38,
  image39,
  // image40,
  // image41,
  image42,
  image43,
  image44,
  // image45,
  image46,
  // image47,
  image48,
  // image49,
  image50,
  image51,
  // image52,
  image53,
  // image54,
  image55,
  // image56,
  image57,
  // image58,
  image59,
  image60,
  // image61,
  image62,
  image63,
  // image64,
  image65,
  image66,
  // image67,
  image68,
  image69,
  // image70,
  // image71,
  image72,
  // image73,
  image74,
  image75,
  // image76,
  image77,
  image78,
  image79,
  image80,
  // image81,
  image82,
  image83,
  image84,
  // image85,
  // image86,
  image87,
  // image88,
  image89,
  // image90,
  image91,
  // image92,
  // image93,
  // image94,
  // image95,
  // image96,
  // image97,
  image98,
  image99,
  image100,
  image101,
  image102,
  // image103,
  // image104,
  // image105,
  image106,
  // image107,
  // image108,
  // image109,
  // image110,
  // image111,
  image112,
  // image113,
  // image114,
  // image115,
  // image116,
  // image117,
  // image118,
  // image119,
  image120,
  // image121,
  // image122,
  // image123,
  // image124,
  // image125,
  // image127,
  // image128,
  // image129,
  // image130,
  // image131,
  // image132,
  // image133,
  // image134,
  image135,
  // image136,
  image137,
  image138,
  image139,
  image140,
  image141,
  image142,
  image143,
  image144,
  image145,
  image146,
  image147,
  image148,
  image149,
  image150,
  image151,
  image152,
  image154,
  image155,
  image156,
  image158,
  image160,
  image161,
  image162,
  image163,
  image164,
  image165,
  image166,
  image167,
  image168,
  image169,
  image170,
  image171,
  image172,
  image173,
  image174,
  image175,
  image176,
  image177,
  image178,
  image179,
  image180,
  image181,
  image182,
  image183,
  image184,
  image185,
  image186,
  image187,
  image188,
  image189,
  image190,
  image191,
  image192,
  image193,
  image194,
  image195,
  image196,
  image197,
  image198,
  image199,
  image200,
  image201,
  image202,
  image203,
  image204,
  image205,
  image206,
  image207,
  // image214,
  // image215,
  // image216,
  image217,
  // image218,
  // image219,
  // image220,
  // image221,
  // image222,
  image223,
  image224,
  image225,
  // image226,
  // image227,
  // image228,
  image229,
  image230,
  // image231,
  // image232,
  // image233,
  // image234,
  // image235,
  // image236,
  // image237,
  // image238,
  // image239,
  // image240,
  image241,
  image242,
];

const images: ImageProps[] = importedImages.map((image, index) => ({
  src: image.src,
  width: image.width,
  height: image.height,
  alt: `Image ${index + 1}`,
}));

const page = () => {
  return (
    <div className="w-full space-y-10 font-normal">
      <GalleryHeader />

      <div className="flex flex-col items-center justify-center">
        <p className="py-1 font-banco text-xl text-white">2019 - 2024 </p>
        <div className="flex w-36 flex-col border-t-[2px] border-white pb-3" />
      </div>

      {/* Main Gallery */}
      <div className="w-full items-center px-6">
        <Gallery enableImageSelection={false} images={images} />
      </div>

      {/* Ghost Skater Gallery */}
      <GhostSkaterGallery />
    </div>
  );
};

export default page;
