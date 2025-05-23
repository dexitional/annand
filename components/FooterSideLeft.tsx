import React from 'react'
import { MdEmail } from 'react-icons/md'
import { FaFacebookF, FaInstagram, FaPhone, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type Props = {}

function FooterSideLeft({}: Props) {
  return (
    <div className="pb-10 sm:pb-0 sm:pr-3 sm:min-h-48 sm:min-w-[23rem] flex flex-col space-y-6 sm:space-y-10 sm:border-r-4 border-b-4 sm:border-b-0 border-dashed border-white">
        <h1 className="text-xl sm:text-[1.75rem] leading-5 sm:leading-8 font-black">Innovative solutions for your digital needs.</h1>
        <div className="flex items-center justify-start space-x-4">
            <div className="p-3 h-fit w-fit bg-black rounded-full">
                <FaInstagram className="h-4 w-4 sm:h-6 sm:w-6 text-white"/>
            </div>
            <div className="p-3 h-fit w-fit bg-black rounded-full">
                <FaFacebookF className="h-4 w-4 sm:h-6 sm:w-6 text-white"/>
            </div>
            <div className="p-3 h-fit w-fit bg-black rounded-full">
                <FaXTwitter className="h-4 w-4 sm:h-6 sm:w-6 text-white"/>
            </div>
            <div className="p-3 h-fit w-fit bg-black rounded-full">
                <FaYoutube className="h-4 w-4 sm:h-6 sm:w-6 text-white"/>
            </div>
        </div>
        <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-2">
                <MdEmail className="h-4 w-4 sm:h-6 sm:w-6" />
                <span className="underline">annandowuona@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
                <FaPhone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="underline">233-33-209-6387</span>
            </div>
        </div>
    </div>
  )
}

export default FooterSideLeft