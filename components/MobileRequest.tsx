import Link from 'next/link'
import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'

type Props = {}

function MobileRequest({}: Props) {
  return (
    <Link href="https://forms.gle/eYaaJeEKenrvTPzNA" className="px-8 py-3 w-full bg-[#EE3E02] cursor-pointer text-white flex items-center justify-center space-x-2">
        <span className="font-bold text-xl">SERVICE REQUEST</span>
        <MdDoubleArrow className="h-6 w-6" />
    </Link>
  )
}

export default MobileRequest