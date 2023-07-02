import Image from "next/image";
import FooterBackground from "/public/assets/footer.svg";
import Logo from "/public/assets/logo.svg";
import YoutubeIcon from "/public/assets/youtube.svg";
// import Facebook from "/public/assets/youtube.svg"
// import YoutubeIcon from "/public/assets/youtube.svg"
// import YoutubeIcon from "/public/assets/youtube.svg"

const Footer = () => {
  return (
    <footer className="bg-[#141414]">
      <div className="text-white relative bg-transparent md:hidden">
        <div className="w-full absolute -z-50">
          <Image src={FooterBackground} className="w-full" alt="" />
        </div>
        <div className="absolute w-full flex flex-col items-center justify-center pt-20">
          <Image src={Logo} alt="" />
        </div>
      </div>
      <div className="hidden text-white  w-full md:flex md:flex-col md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto py-20">
        <div className="flex">
          <div className="p-2 bg-[#ffffff15] rounded-full flex justify-center items-center border-[#ffffff25] border">
            <Image src={YoutubeIcon} />
          </div>
          <div className="p-2 bg-[#ffffff15] rounded-full flex justify-center items-center border-[#ffffff25] border">
            <Image src={YoutubeIcon} />
          </div>
          <div className="p-2 bg-[#ffffff15] rounded-full flex justify-center items-center border-[#ffffff25] border">
            <Image src={YoutubeIcon} />
          </div>
          <div className="p-2 bg-[#ffffff15] rounded-full flex justify-center items-center border-[#ffffff25] border">
            <Image src={YoutubeIcon} />
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
