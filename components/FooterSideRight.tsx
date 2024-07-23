import React from 'react'
import LogoFoot from './LogoFoot'

type Props = {}

function FooterSideRight({}: Props) {
  return (
    <div className="sm:px-10 sm:min-h-48 sm:min-w-[25rem]">
        <div className="flex flex-col md:space-y-10 ">
            <LogoFoot />
            <p className="text-blue-900 font-bold">AnnanD Enterprise is passionate about harnessing the power of technology to drive business success and educational excellence. Working shape the future of IT consulting in Ghana and Beyond!</p>
        </div>
        <div></div>
    </div>
  )
}

export default FooterSideRight