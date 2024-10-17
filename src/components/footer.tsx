import Image from "next/image";
import Link from "next/link";
import { GroupMe } from "@/public/assets/footer";
import { PiInstagramLogoFill } from "react-icons/pi";

import { Bangers } from "@next/font/google";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between border-[6.5px] bg-black py-[14px] pl-[28px] pr-[22px] text-white">
      <p
        className={bangers.className}
        style={{ fontSize: "28px", lineHeight: "29.79px" }}
      >
        Skate Club at UCR
      </p>
      <div className="flex items-start gap-x-[25px]">
        <Link
          target="_blank"
          href="https://groupme.com/join_group/96899336/vA4lVygX?fbclid=PAZXh0bgNhZW0CMTEAAaatHEP5LfJUz5KVGf4u2uTje2wMrD7Uow0ZdHg7QIk8YmjD4htZPjVOdsM_aem_cT-YC_qRlb8jNyD9u9Q7qg"
        >
          <Image src={GroupMe} alt="Groupme" />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/skateclubucr/">
          <PiInstagramLogoFill size={50} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
