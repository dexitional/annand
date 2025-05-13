import React from 'react'
import InsightBox from './InsightBox'

type Props = {}

function GlobalInsightWidget({}: Props) {
  
  const pills = [
     { title: 'OUR EXPERTISE', content:'Our team of skilled developers and designers use the latest technologies and best practices to deliver an ultra-modern applications and products to our clients.' },
     { title: 'OUR APPROACH', content:' We take the collaborative approach, thus working closely with our clients to understand their unique needs and goals, and develop tailored solutions that meet their specific requirements.' },
     { title: 'WHY CHOOSE US', content:'Our team has extensive experience in IT, education and design. We take the time to understand your unique needs and tailor our services to meet your goals.' },
  ]
  return (
    <div className="w-full bg-white font-sans">
        <div className="py-6 md:py-10 md:pt-6 md:pb-12 px-4 md:px-10 md:mx-auto md:max-w-7xl flex flex-col space-y-6 md:space-y-12 justify-center items-center">
            <h2 className="md:w-1/2 text-xl md:text-[2.7rem] text-center font-black leading-tight"> <br/><span className="px-4 md:px-10 pt-3 pb-2 rounded-full bg-[#0E1A62] text-white">annanD Consult</span></h2>
            <p className='w-[90%] text-lg  md:text-[1.4rem] font-medium text-center leading-relaxed'>At annanD, we believe that technology has the power to transform businesses, educational institutions, and individuals. Our team of experts is dedicated to helping clients in Ghana and beyond to harness this power and achieve their goals. With years of experience in IT consulting, website development, university management development, study abroad support, and graphic designing, we have the expertise to deliver tailored solutions that meet the unique needs of our clients. </p>
            <div className='mt-16 mb-6 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-28'>
                { pills?.map(r => <InsightBox key={r.title} data={r} />)}
            </div>
        </div>
    </div>
  )
}

export default GlobalInsightWidget