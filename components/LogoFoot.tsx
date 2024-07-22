import React from 'react'
import Logo from '../public/logo.png'

type Props = {}

function LogoFoot({}: Props) {
  return (
    <div className="flex items-center justify-center">
        <img src={Logo.src} alt="" className="relative h-28 "/>
    </div>
  )
}

export default LogoFoot