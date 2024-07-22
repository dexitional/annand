import Image from 'next/image'
import React from 'react'
import { ImPriceTag } from "react-icons/im";
import FeaturedImage1 from '../public/b1.jpg'
import FeaturedImage2 from '../public/b2.jpg'
import FeaturedImage3 from '../public/b3.jpg'
import NewsBox from './NewsBox';
type Props = {}

function NewsWidget({}: Props) {
  
  const data = [
    { 
        title: 'DELIVERING AID IN GHANA: YOUR QUESTIONS ANSWERED',
        excerpt: 'After eight months of conflict, delivering aid to the millions of Africans trapped in the poverty remains an insurmountable challenge. Alongside our efforts to advocate for support, it…',
        image: FeaturedImage1,
        link: '#',
        category: 'PRESS RELEASE',
        date:'June 21, 2024',
        author: 'ACO'
    },
    { 
        title: 'DELIVERING AID IN GHANA: YOUR QUESTIONS ANSWERED',
        excerpt: 'After eight months of conflict, delivering aid to the millions of Africans trapped in the poverty remains an insurmountable challenge. Alongside our efforts to advocate for support, it…',
        image: FeaturedImage2,
        link: '#',
        category: 'UPCOMING EVENT',
        date:'June 21, 2024',
        author: 'ACO'
    },
    { 
        title: 'DELIVERING AID IN GHANA: YOUR QUESTIONS ANSWERED',
        excerpt: 'After eight months of conflict, delivering aid to the millions of Africans trapped in the poverty remains an insurmountable challenge. Alongside our efforts to advocate for support, it…',
        image: FeaturedImage3,
        link: '#',
        category: 'PRESS RELEASE',
        date:'June 21, 2024',
        author: 'ACO'
    }
  ]

  return (
    <div className="w-full font-sans">
        <div className="pt-16 px-4 sm:px-10 sm:mx-auto sm:max-w-7xl grid grid-cols-1 sm:grid-cols-3 sm:gap-10">
          <div className="text-2xl sm:text-4xl font-black flex flex-col space-y-1">
              <h1>HAPPENING NOW.</h1> 
              <h1 className="pt-1.5 pb-0.5 px-3 w-fit text-white bg-green-600">ACO NEWS</h1>
          </div>
        </div>
        <div className="py-14 px-4 sm:px-10 sm:mx-auto sm:max-w-7xl grid grid-cols-1 sm:grid-cols-3 gap-10">
           { data.map(r => (<NewsBox key={r?.title} data={r} />))}
        </div>
    </div>
  )
}

export default NewsWidget