import Image from 'next/image'
import React from 'react'
import Logo from '../public/logo_notext.png'
import { MdDoubleArrow } from "react-icons/md";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from 'next/link';


function Header() {

  const navigations = [
     { label: 'Who We Are', 
       link: '', 
       subMenu : [
          { label: 'Our Mission, Vision and Values', link: '' },
          { label: 'Our Team', link: '' },
          { label: 'Meet our Fundraisers', link: '' },
          { label: 'Contact Us', link: '' },
          
       ] 
     },
     { label: 'What We Do', 
        link: '', 
        subMenu : [
           { label: 'Our Projects', link: '/projects' },
           { label: 'Our Approach', link: '/approach' },
           { label: 'Stories of Change', link: '/change-stories' },
        ] 
     },

     { label: 'Take Action', 
        link: '', 
        subMenu : [
           { label: 'Become A Volunteer', link: '/volunteer' },
           { label: 'Adehye Stories', link: 'stories' },
           { label: 'Newsletters', link: 'newsletters' },
        ] 
     },
     { label: 'News & Stories', 
        link: '', 
        subMenu : [
            { label: 'Newsroom', link: '/newsroom' },
           { label: 'Adehye Stories', link: 'stories' },
           { label: 'Newsletters', link: 'newsletters' },
        ] 
     }
  ];

  return (
    <header className="w-full shadow-[0px_10px_10px_#eee]">
        {/* Top Nav Bar */}
        <div className="w-full bg-gray-800">
            <div className="mx-auto w-full h-7 max-w-7xl text-gray-300 text-xs flex items-center">the Art of Caring</div>
        </div>
        {/* Menu Bar */}
        <div className="w-full  ">
           <div className="mx-auto w-full h-[7rem] max-w-7xl flex items-center justify-between ">
                <div className="flex space-x-6">
                    <img src={Logo.src} alt="" className="relative h-20 "/>
                    <div className="pt-0 flex flex-col ">
                        <div className="flex flex-col -space-y-0.5 font-sans font-black tracking-wider">
                           <span className="text-4xl text-[#44841B] tracking-[0.25em]">ADEHYE</span>
                           <span className="text-sm tracking-widest text-[#44841B]">CHARITY ORGANIZATION</span>
                        </div>
                        <span className="text-xs text-[#fa981c] font-sans font-bold  tracking-wider">** the Art of Caring **</span>

                    </div>
                </div>
                <nav className="flex items-center space-x-10 font-sans font-bold text-lg text-[#44841B]">
                    <NavigationMenu className="flex items-center space-x-10">
                         <NavigationMenuList>
                        { navigations?.map((r,i) => (
                            <NavigationMenuItem key={i} >
                                {/* <Link href={r.link} legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    {r.label}
                                    </NavigationMenuLink>
                                </Link> */}
                                <NavigationMenuTrigger>{r.label}</NavigationMenuTrigger>
                                <NavigationMenuContent className="">
                                <ul className="py-3 w-48 font-medium text-base">
                                    { r?.subMenu?.map((s) => (
                                        <Link key={s.link} href={s.link}>
                                            <NavigationMenuLink asChild >
                                                <div key={s?.label} className="px-4 py-2 w-full hover:bg-red-100 text-black">{s?.label}</div>
                                            </NavigationMenuLink>
                                        </Link>
                                    ))}
                                </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        ))}
                        </NavigationMenuList>   
                    </NavigationMenu>
                    {/* <div className="">Who We Are</div>
                    <div>What We Do</div>
                    <div>News & Stories</div>
                    <div>Take Action</div>
                    <div>Contact Us</div> */}
                    <div className="px-8 py-3 bg-[#EE3E02] cursor-pointer text-white flex items-center space-x-2 justify-between">
                        <span className="font-bold ">DONATE</span>
                        <MdDoubleArrow className="h-6 w-6" />
                    </div>
                </nav>

           </div>
        </div>

    </header>
  )
}

export default Header