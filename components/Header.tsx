import Image from 'next/image'
import React from 'react'
import { MdDoubleArrow } from "react-icons/md";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from 'next/link';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from './ui/menubar';
import LogoMain from './LogoMain';
import MainNav from './MainNav';
import MobileNav from './MobileNav';


function Header() {
  
   
  const navigations = [
     { label: 'About', 
       link: '', 
       subMenu : [
          { label: 'Our Vision and Values', link: '#' },
          { label: 'Our Team', link: '#' },
          { label: 'Contact Us', link: '#' },
          
       ] 
     },
     { label: 'Services', 
        link: '', 
        subMenu : [
           { label: '⁠Software Development', link: '#' },
           { label: '⁠IT Project Management', link: '#' },
           { label: '⁠Data Integration', link: '#' },
           { label: '⁠IT Training and Support Services', link: '#' },
           { label: '⁠Study Abroad', link: '#' },
           { label: '⁠Graphics Designing', link: '#' },
           { label: '⁠Business Registration', link: '#' },
           { label: '⁠Ghana Passport Facilitation', link: '#' },
        ] 
     },

     { label: 'Products', 
        link: '', 
        subMenu : [
           { label: 'Electronic Voting Software', link: '#' },
           { label: '⁠Admission Management Software', link: '#' },
           { label: '⁠Finance Management Software', link: '#' },
           { label: '⁠Student Academic Management Software', link: '#' },
           { label: '⁠HR Management Software', link: '#' },
           { label: '⁠Elearning Software', link: '#' },
           { label: '⁠Facility Booking Software', link: '#' },
        ] 
     },
     { label: 'Support', 
        link: '', 
        subMenu : [
            { label: 'Remote Support', link: '#' },
           { label: 'On-Site Support', link: '#' },
           
        ] 
     }
  ];

  return (
    <header className="z-20 sm:sticky sm:top-0 bg-white w-full shadow-[0px_10px_10px_rgba(0,0,0,0.1)]">
        {/* Top Nav Bar */}
        <div className="hidden sm:block w-full bg-blue-800">
          <div className="mx-auto w-full h-7 max-w-7xl text-gray-300 text-sm flex items-center">Innovative solutions for your digital needs</div>
        </div>
        {/* Menu Bar */}
        <div className="w-full  ">
          <div className="hidden mx-auto w-full sm:h-[7rem] sm:max-w-7xl sm:flex items-center justify-between ">
            <LogoMain />
            <MainNav data={navigations} />
          </div>
        </div>
        <MobileNav data={navigations} />
    </header>
  )
}

export default Header