import Image from 'next/image'
import React from 'react'
import { ImPriceTag } from 'react-icons/im'
import Watermark from '../public/logo_orange.png'

type Props = {
    data: any;
}

function NewsBox({ data }: Props) {
  return (
    <div className="mb-52 relative h-64 ">
        <Image src={data.image} alt="" className="object-cover" fill/> 
        <div className="relative top-6 -left-36 h-16 opacity-50">
             <Image src={Watermark} alt="" className="object-contain" fill />
        </div>
        
        <div className="px-4 w-[94%] absolute left-3 top-56 flex flex-col space-y-3 bg-white/90">
            <div className="py-1 flex items-center space-x-2">
                <ImPriceTag className="w-3 h-3" />
                <span className="text-sm font-medium line-clamp-3">{data.category}</span>
            </div>
            <h1 className="text-lg font-black leading-6 text-[#44841B]">{data.title}</h1>
            <p className="text-base font-medium line-clamp-4">{data.excerpt}</p>
            <div className="pb-4 text-xs font-bold">by ACO | {data.date}</div>
        </div> 
    </div>
  )
}

export default NewsBox