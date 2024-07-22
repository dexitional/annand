import React from 'react'
import Logo from '../public/logo.png'

type Props = {}

function LogoMain({}: Props) {
  return (
    <div className="flex flex-col -space-y-4 items-center justify-center">
        <img src={Logo.src} alt="" className="relative h-24 "/>
        {/* <span className="text-sm text-blue-400 font-sans font-bold  tracking-wider">Innovative solutions for your digital needs</span> */}
        
    </div>
  )
}

export default LogoMain