import Image from "next/image";
import FooterBackground from "/public/assets/footer.svg";
import Logo from "/public/assets/logo.svg";
import YoutubeIcon from "/public/assets/youtube.svg";
import Facebook from "/public/assets/facebook.svg";
import Instagram from "/public/assets/instagram.svg";
import Whatsapp from "/public/assets/whatsapp.svg";

const Footer = () => {
  return (
    <footer className="bg-[#141414]">
      <div className="text-white relative bg-transparent md:hidden">
        <div className="w-full absolute -z-50">
          <Image src={FooterBackground} className="w-full" alt="" />
        </div>
        <div className="absolute w-full flex flex-col items-center justify-center pt-20 px-10">
          <Image src={Logo} alt="" />
          <div className="mt-20">
            <div className="uppercase grid grid-cols-3 gap-x-5 text-sm gap-y-5">
              <div>Instagram</div>
              <div>Facebook</div>
              <div>Pinterest</div>
              <div className="col-span-3 text-center">Youtube</div>
            </div>
          </div>
          <div className="w-full h-full mt-10">
            <div className="h-0.5 bg-white w-full" />
          </div>
          <div className="uppercase flex justify-between w-full mt-20 text-sm">
            <div>Privacy Policy</div>
            <div>/</div>
            <div>Term of use</div>
          </div>
        </div>
      </div>
      <div className="hidden  w-full md:flex md:flex-col md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto py-20 text-[#9A9A9A]">
        <div className="flex gap-2">
          <div className="p-2 bg-[#ffffff15] rounded-full flex justify-center items-center border-[#ffffff25] border">
            <Image src={YoutubeIcon} alt="youtube icon" />
          </div>
          <div className="p-2 bg-[#ffffff15] rounded-full flex justify-center items-center border-[#ffffff25] border">
            <Image src={Facebook} alt="facebook icon" />
          </div>
          <div className="p-2 bg-[#ffffff15] rounded-full flex justify-center items-center border-[#ffffff25] border">
            <Image src={Instagram} alt="instagram icon" />
          </div>
          <div className="p-2 bg-[#ffffff15] rounded-full flex justify-center items-center border-[#ffffff25] border">
            <Image src={Whatsapp} alt="whatsapp icon" />
          </div>
        </div>
        <div className="flex justify-between w-full mt-10 text-sm ">
          <div className="space-y-4">
            <div>Audio Description</div>
            <div>Investor Relation</div>
            <div>Legal Notice</div>
            <div>FAQ&apos;s</div>
          </div>
          <div className="space-y-4">
            <div>Help Center</div>
            <div>Job</div>
            <div>Cookie Preferences</div>
          </div>
          <div className="space-y-4">
            <div>Help Center</div>
            <div>Job</div>
            <div>Cookie Preferences</div>
          </div>
          <div className="space-y-4">
            <div>Help Center</div>
            <div>Job</div>
            <div>Cookie Preferences</div>
          </div>
        </div>
        <div className="text-sm my-4">2023 SRD, Inc.</div>
      </div>
    </footer>
  );
};

export default Footer;
