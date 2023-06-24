import Image from 'next/image'
import React from 'react'
import Logo from '/public/assets/logo.svg'
import  Menu from "/public/assets/menu.svg";

const Navbar = () => {
  return (
    <div className='md:bg-[#141414] text-white px-8 pt-7 pb-6'>
      <div className='md:hidden flex justify-between'>
        <div className='flex justify-center items-center'><Image src={Menu} alt="menu" /></div>
        <div><Image src={Logo} alt="" /></div>
      </div>
    </div>
  )
}

export default Navbar