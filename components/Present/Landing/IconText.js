import React from 'react'
import Image from "next/image"

const IconText = ({type,icon,title,description,index}) => {
  return (
    <div className='p-6 w-4/12 space-y-4 border-2 rounded mx-1 h-full'>
        {(type === "icon") ? (
            {icon}
        ) : (
            <Image
              width={100} height={100}
              src={icon}
            />
        )}
        
        <h1 className='text-xl font-bold'>
          {title}
        </h1>

        <p className='font-medium text-gray-600'>
          {description}
        </p>


    </div>
  )
}

export default IconText