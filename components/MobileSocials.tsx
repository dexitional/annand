import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

type Props = {}

function MobileSocials({}: Props) {
  return (
    <div className="px-6 py-4 border-y-2 border-white flex items-center justify-start space-x-4 bg-[#0E1A62]">
        <div className="p-2 h-fit w-fit bg-white rounded-full">
            <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6 text-[#0E1A62]"/>
        </div>
        <div className="p-2 h-fit w-fit bg-white rounded-full">
            <FaFacebookF className="h-5 w-5 sm:h-6 sm:w-6 text-[#0E1A62]"/>
        </div>
        <div className="p-2 h-fit w-fit bg-white rounded-full">
            <FaXTwitter className="h-5 w-5 sm:h-6 sm:w-6 text-[#0E1A62]"/>
        </div>
        <div className="p-2 h-fit w-fit bg-white rounded-full">
            <FaYoutube className="h-5 w-5 sm:h-6 sm:w-6 text-[#0E1A62]"/>
        </div>
    </div>
  )
}

export default MobileSocials