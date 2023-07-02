import Image from "next/image";
import React from "react";
import Logo from "/public/assets/logo.svg";
import Menu from "/public/assets/menu.svg";
import Search from "/public/assets/search-normal.svg";
import CartIcon from "/public/assets/shopping-cart.svg";

const Navbar = () => {
  return (
    <div className="md:bg-[#141414] text-white px-8 pt-7 pb-6 lg:px-20">
      <div className="md:hidden flex justify-between">
        <div className="flex justify-center items-center">
          <Image src={Menu} alt="menu" />
        </div>
        <div>
          <Image src={Logo} alt="" />
        </div>
      </div>
      <div>
        <div className="hidden md:flex justify-between items-center uppercase">
          <div>
            <Image src={Logo} alt="" />
          </div>
          <div className="flex gap-20">
            <div className="flex gap-12 text-xl">
              <button className="uppercase">Home</button>
              <button className="uppercase">About Us</button>
            </div>
            <div className="flex gap-8">
              <button><Image src={Search} alt="" /></button>
              <button><Image src={CartIcon} alt="" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
