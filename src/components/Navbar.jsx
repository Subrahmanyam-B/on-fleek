import Image from "next/image";
import React from "react";
import Logo from "/public/assets/logo.svg";
import Menu from "/public/assets/menu.svg";
import Search from "/public/assets/search-normal.svg";
import CartIcon from "/public/assets/shopping-cart.svg";
import SearchPortal from "./SearchPortal";
import Link from "next/link";
import Close from "/public/assets/close.svg";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [router]);

  return (
    <div className="absolute left-0 top-0 z-10 w-full p-[3px]">
      <div className=" text-white w-full px-8 pt-7 pb-6 lg:px-20">
        <div className="md:hidden flex justify-between">
          <div className="flex gap-3 justify-center items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              <Image src={Menu} alt="menu" />
            </button>
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Image src={Search} alt="" />
            </button>
          </div>

          <Link href={"/"}>
            <Image src={Logo} alt="" />
          </Link>
        </div>
        <div>
          <div className="hidden md:flex justify-between items-center uppercase">
            <Link href={"/"}>
              <Image src={Logo} alt="" />
            </Link>
            <div className="flex gap-20">
              <div className="flex gap-12 ">
                <Link href={"/"} className="uppercase">
                  Home
                </Link>
                <Link href={"/about"} className="uppercase">
                  About Us
                </Link>
              </div>
              <div className="flex gap-8">
                <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
                  <Image src={Search} alt="" className="w-5 h-5" />
                </button>
                <button>
                  <Image src={CartIcon} alt="" className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <SearchPortal
          isOpen={isSearchOpen}
          handleClose={() => setIsSearchOpen(false)}
        />
        {isOpen && (
          <div
            className={`md:hidden fixed bg-black z-30 inset-0 left-auto ${
              isOpen ? "left-0" : "left-[-100%]"
            } h-full w-full grid place-items-center`}
          >
            <div className="flex flex-col gap-5 text-xl text-center">
              <Link href={"/"} className="uppercase">
                Home
              </Link>
              <Link href={"/about"} className="uppercase">
                About Us
              </Link>
            </div>
            <button className="absolute right-5 top-5">
              <Image
                src={Close}
                alt={"Close Icon"}
                width={20}
                height={20}
                className="h-5 w-5 cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
