import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'

type Props = {
    data: any;
}

function TakeActionBox({ data: { Icon,title,content,label,link } }: Props) {
  return (
    <div className="flex flex-col items-center space-y-10">
        <div className="relative h-48">
            <Icon className="h-48 w-48" fill/>
        </div>
        <h1 className="text-3xl font-black">{title}</h1>
        <p className="text-lg font-medium text-center">{content}</p>
        <Link href={link} className="flex items-center space-x-3 text-[#EE3E02] group hover:space-x-4 transition-all">
            <span className="text-lg font-black transition-all group-hover:text-xl">{label}</span>
            <MdDoubleArrow className="h-6 w-6" />
        </Link>
    </div>
  )
}

export default TakeActionBox