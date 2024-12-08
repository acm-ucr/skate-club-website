import Image from "next/image";
import Link from "next/link";
import { GroupMe } from "@/public/assets/footer";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between border-[3.5px] bg-black py-[14px] pl-[28px] pr-[22px] text-white md:border-[6.5px]">
      <p className={"font-bangers text-xl md:text-[28px] md:leading-[29.79px]"}>
        Skate Club at UCR
      </p>
      <div className="flex items-start gap-x-[25px]">
        <Link
          target="_blank"
          href="https://groupme.com/join_group/96899336/vA4lVygX?fbclid=PAZXh0bgNhZW0CMTEAAaatHEP5LfJUz5KVGf4u2uTje2wMrD7Uow0ZdHg7QIk8YmjD4htZPjVOdsM_aem_cT-YC_qRlb8jNyD9u9Q7qg"
        >
          <div className="size-fit transition-transform duration-300 hover:scale-110">
            <Image src={GroupMe} alt="GroupMe" />
          </div>
        </Link>
        <Link target="_blank" href="https://www.instagram.com/skateclubucr/">
          <div className="transition-transform duration-300 hover:scale-125">
            <PiInstagramLogoFill size={50} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
