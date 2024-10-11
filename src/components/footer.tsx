import Image from "next/image";
import { GroupMe, Insta } from "@/public/assets/footer";

import { Bangers } from "@next/font/google";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between border-[8px] bg-black py-3 pl-[28px] pr-[22px] text-white">
      <p
        className={bangers.className}
        style={{ fontSize: "28px", lineHeight: "29.79px" }}
      >
        Skate Club at UCR
      </p>
      <div className="flex items-center gap-x-[25px]">
        <Image src={GroupMe} alt="Groupme" className="" />
        <Image src={Insta} alt="Instagram" className="" />
      </div>
    </div>
  );
};

export default Footer;
