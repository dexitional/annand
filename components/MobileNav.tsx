import React from 'react'
import LogoMobile from './LogoMobile';
import { HiMenu } from "react-icons/hi";
import { MdDoubleArrow, MdPlayArrow } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

type Props = {
    data: any;
}

function MobileNav({ data }: Props) {
  return (
    <div className="sm:hidden flex flex-col font-sans">
        <div className="px-4 py-1 w-full h-[3.7rem] bg-black flex items-center justify-between font-sans">
            <LogoMobile />
            <div className="flex items-center space-x-6">
                <button className="px-3 py-0.5 text-white border border-white">Donate</button>
                <button className="p-1">
                    <HiMenu className="h-9 w-9 text-white" />
                </button>
            </div>
        </div>
        <div className="z-20 w-full h-full bg-amber-200 font-sans">
            {/* Search Box */}
            <form className="px-5 py-2 bg-[#0C884A] flex flex-col space-y-1">
                <label className="text-lg font-bold text-white">What can we help you find?</label>
                <div className="flex items-center justify-between">
                    <input type="search" className="px-4 py-2 w-[62.5%] font-medium text-white focus:outline-0 border border-white bg-green-700/50" />
                    <button className="px-4 py-2 flex items-center space-x-3 bg-[#44841B] text-white">
                        <span className="font-bold">Search</span>
                        <MdPlayArrow className="h-4 w-4" />
                    </button>
                </div>
            </form>

            {/* Collapsible Menu */}
            <nav className="bg-white flex flex-col justify-center ">
                
                <div className="py-4 font-bold text-[#44841B] flex flex-col space-y-1.5 border-b last:border-b-0 border-slate-200">
                    <span className="px-2">Who We Are</span>
                    <div className="pl-8 text-gray-500 font-medium bg-gray-100">
                        <div className="pr-4 py-1.5 w-full border-b">Our Story</div>
                        <div className="pr-4 py-1.5 w-full border-b">Our Story</div>
                        <div className="pr-4 py-1.5 w-full border-b">Our Story</div>
                    </div> 
                </div>  
                <div className="py-4 font-bold text-[#44841B] flex flex-col space-y-1.5 border-b last:border-b-0 border-slate-200">
                    <span className="px-2">Who We Are</span>
                </div>  
                <div className="py-4 font-bold text-[#44841B] flex flex-col space-y-1.5 border-b last:border-b-0 border-slate-200">
                    <span className="px-2">Who We Are</span>
                </div>  
            </nav>

            {/* Social Buttons */}
            <div className="px-6 py-4 border-y-2 border-white flex items-center justify-start space-x-4 bg-[#0C884A]">
                <div className="p-2 h-fit w-fit bg-white rounded-full">
                    <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6 text-[#0C884A]"/>
                </div>
                <div className="p-2 h-fit w-fit bg-white rounded-full">
                    <FaFacebookF className="h-5 w-5 sm:h-6 sm:w-6 text-[#0C884A]"/>
                </div>
                <div className="p-2 h-fit w-fit bg-white rounded-full">
                    <FaXTwitter className="h-5 w-5 sm:h-6 sm:w-6 text-[#0C884A]"/>
                </div>
                <div className="p-2 h-fit w-fit bg-white rounded-full">
                    <FaYoutube className="h-5 w-5 sm:h-6 sm:w-6 text-[#0C884A]"/>
                </div>
            </div>
            {/* Donate Button */}
            <div className="px-8 py-3 w-full bg-[#EE3E02] cursor-pointer text-white flex items-center justify-center space-x-2">
                <span className="font-bold text-xl">DONATE</span>
                <MdDoubleArrow className="h-6 w-6" />
            </div>
        </div>
    </div>
  )
}

export default MobileNav