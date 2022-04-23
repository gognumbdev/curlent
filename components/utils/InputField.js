import React from 'react'

const InputField = ({title,value,setValue}) => {
  return (
    <div className='space-y-2'>
        {/* title */}
        <p className='text-xl font-bold text-gray-500'>
          {title}
        </p>
        
        <input 
          type="text" 
          name={title} 
          value={value}
          className="border-2 w-full rounded text-xl px-4 py-3 focus:outline-blue-600 transition transform duration-150 ease-out"
          onChange={(e) => setValue(e.target.value)}
        />
    </div>
  )
}

export default InputField