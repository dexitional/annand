import React from 'react'
import { MdEmail, MdPlayArrow } from 'react-icons/md'
import { FaFacebookF, FaInstagram, FaPhone, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import LogoFoot from './LogoFoot';
import FooterSideRight from './FooterSideRight';
import FooterSideMid from './FooterSideMid';
import FooterSideLeft from './FooterSideLeft';
import FooterBottom from './FooterBottom';

function Footer() {
  return (
    <footer className="w-full shadow-[0px_10px_10px_#eee]">
        {/* Menu Bar */}
        <div className="px-5 py-5 sm:py-10 w-full bg-blue-300 font-sans">
           <div className="sm:mx-auto w-full sm:max-w-5xl flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:items-center sm:justify-between">
             <FooterSideLeft />
             <FooterSideMid />
             <FooterSideRight />
           </div>
        </div>
        {/* Top Nav Bar */}
        <FooterBottom />
    </footer>
  )
}

export default Footer