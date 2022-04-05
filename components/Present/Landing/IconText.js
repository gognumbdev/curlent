import React from 'react'
import Image from "next/image"

const IconText = ({type,icon,title,description}) => {
  return (
    <div className='p-4 w-3/12'>
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