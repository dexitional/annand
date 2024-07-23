import React from 'react'
import LogoMobile from './LogoMobile';
import { HiMenu } from "react-icons/hi";
import { MdDoubleArrow, MdPlayArrow } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import MobileSocials from './MobileSocials';
import { NavigationMenu } from '@radix-ui/react-navigation-menu';
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu';

type Props = {
    data: any;
}

function MobileNav({ data }: Props) {
  return (
   
    <NavigationMenu className="m-0 p-0 sm:hidden flex flex-col font-sans">
        <NavigationMenuList className='p-0'>
          <NavigationMenuItem className='p-0'>
            <div className="px-4 py-1 w-full h-[3.7rem] bg-blue-200 flex items-center justify-between font-sans">
                <LogoMobile />
                <div className="flex items-center space-x-6">
                    <button className="px-3 py-0.5 text-[#0E1A62] border border-[#0E1A62]">Donate</button>
                    <NavigationMenuTrigger className="p-1">
                        <HiMenu className="h-9 w-9 text-[#0E1A62]" />
                    </NavigationMenuTrigger>
                </div>
            </div>
            <NavigationMenuContent className="z-20 w-full h-full bg-amber-200 font-sans">
                {/* Search Box */}
                <form className="px-5 py-2 bg-[#0E1A62] flex flex-col space-y-1">
                    <label className="text-lg font-bold text-white">What can we help you find?</label>
                    <div className="flex items-center justify-between">
                        <input type="search" className="px-4 py-2 w-[62.5%] font-medium text-white focus:outline-0 border border-white bg-green-700/50" />
                        <button className="px-4 py-2 flex items-center space-x-3 bg-blue-200 text-white">
                            <span className="font-bold text-[#0E1A62]">Search</span>
                            <MdPlayArrow className="h-4 w-4 text-[#0E1A62]" />
                        </button>
                    </div>
                </form>

                {/* Collapsible Menu */}
                <nav className="bg-white flex flex-col justify-center ">
                    
                    <div className="py-4 font-bold text-[#0E1A62] flex flex-col space-y-1.5 border-b last:border-b-0 border-slate-200">
                        <span className="px-2">Who We Are</span>
                        <div className="pl-8 text-gray-500 font-medium bg-gray-100">
                            <div className="pr-4 py-1.5 w-full border-b">Our Story</div>
                            <div className="pr-4 py-1.5 w-full border-b">Our Story</div>
                            <div className="pr-4 py-1.5 w-full border-b">Our Story</div>
                        </div> 
                    </div>  
                    <div className="py-4 font-bold text-[#0E1A62] flex flex-col space-y-1.5 border-b last:border-b-0 border-slate-200">
                        <span className="px-2">Who We Are</span>
                    </div>  
                    <div className="py-4 font-bold text-[#0E1A62] flex flex-col space-y-1.5 border-b last:border-b-0 border-slate-200">
                        <span className="px-2">Who We Are</span>
                    </div>  
                </nav>

                {/* Social Buttons */}
                <MobileSocials />
                {/* Donate Button */}
                
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MobileNav