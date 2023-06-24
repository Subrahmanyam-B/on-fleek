import Image from "next/image";
import FooterBackground from "/public/assets/footer.svg";
import Logo from "/public/assets/logo.svg";

const Footer = () => {
  return (
    <div className="text-white relative bg-transparent">
      <div className="w-full absolute -z-50">
        <Image src={FooterBackground} className="w-full" alt="" />
      </div>
      <div className="absolute w-full flex flex-col items-center justify-center pt-20">
        <Image src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
