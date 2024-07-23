import React from 'react'
import { MdPlayArrow } from 'react-icons/md'

type Props = {}

function SearchBox({}: Props) {
  return (
    <form className="px-5 py-2 bg-[#0E1A62] flex flex-col space-y-1">
        <label className="text-lg font-bold text-white">What can we help you find?</label>
        <div className="flex items-center justify-between">
            <input type="search" className="px-4 py-2 w-[62.5%] font-medium text-white focus:outline-0 border border-white bg-green-700/50" />
            <button className="px-4 py-2 flex items-center space-x-3 bg-blue-200 text-white">
                <span className="font-bold text-[#0E1A62]">Search</span>
                <MdPlayArrow className="h-4 w-4 text-[#0E1A62]" />
            </button>
        </div>
    </form>
  )
}

export default SearchBox