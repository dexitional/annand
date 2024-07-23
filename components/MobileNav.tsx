import React from 'react'
import LogoMobile from './LogoMobile';
import { HiMenu } from "react-icons/hi";
import { MdDoubleArrow, MdPlayArrow } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import MobileSocials from './MobileSocials';
import { NavigationMenu } from '@radix-ui/react-navigation-menu';
import { NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import SearchBox from './SearchBox';

type Props = {
    data: any;
}

function MobileNav({ data }: Props) {
  return (
    <DropdownMenu>
    <div className="m-0 p-0 sm:hidden flex flex-col font-sans">
       
            <div className="px-4 py-1 w-full h-[3.7rem] bg-blue-200 flex items-center justify-between font-sans">
                <LogoMobile />
                <div className="flex items-center space-x-6">
                    <button className="px-3 py-0.5 text-[#0E1A62] border border-[#0E1A62]">Donate</button>
                    <DropdownMenuTrigger className="p-1">
                        <HiMenu className="h-9 w-9 text-[#0E1A62]" />
                    </DropdownMenuTrigger>
                </div>
            </div>
            <DropdownMenuContent className="w-full h-full m-0 p-0 border-0 left-0">
            <div className="z-20 w-full h-full bg-amber-200 font-sans">
                {/* Search Box */}
                {/* <SearchBox /> */}

                {/* Collapsible Menu */}
                <nav className="bg-white flex flex-col justify-center overflow-y-auto">
                 { data?.map((r:any,i:number) => (
                    <Collapsible className="py-4 font-bold text-[#0E1A62] flex flex-col space-y-1.5 border-b last:border-b-0 border-slate-200">
                        <CollapsibleTrigger className="px-4 text-left">{r.label}</CollapsibleTrigger>
                        <CollapsibleContent className="pl-8 text-gray-500 font-medium bg-gray-100">
                        { r?.subMenu?.map((s:any) => (
                            <Link key={s?.label} href={s.link}>
                            <div className="pr-4 py-1.5 w-full border-b">{s?.label}</div>
                            </Link>
                        ))}
                        </CollapsibleContent> 
                    </Collapsible> 
                 ))} 
                </nav>
                {/* Social Buttons */}
                <MobileSocials />
                {/* Donate Button */}
            </div>
            </DropdownMenuContent>
         
    </div>
    </DropdownMenu>
  )
}

export default MobileNav