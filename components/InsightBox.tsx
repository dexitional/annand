import React from 'react'

type Props = {
    data: any;
}

function InsightBox({ data }: Props) {
  return (
    <div className='flex flex-col sm:space-y-6 items-center font-sans text-center'>
        <h2 className='w-2/3 text-xl sm:text-3xl font-black'>{data?.title}</h2>
        <p className='text-base sm:text-xl font-medium'>{data?.content}</p>
    </div>
  )
}

export default InsightBox