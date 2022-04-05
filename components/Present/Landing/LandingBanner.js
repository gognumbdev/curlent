import React from 'react'
import APIsSample from "../../../public/image/APIsSample.jpg"
import CheckoutPage from "../../../public/image/CheckoutPage.jpg"
import Image from "next/image"
import { useRouter } from 'next/router'

const LandingBanner = () => {
  const router = useRouter()
  return (
    <div className='flex w-8/12 place-self-center'>
      
      {/* Left */}
      <div className='w-8/12 grid grid-cols-1 px-4'>
        {/* Banner Title */}
        <h1 className='text-6xl font-bold place-self-center'>
          Payment Infastructure for the Crypto Economy
        </h1>

        {/* Banner Subtitle */}
        <p className='text-xl w-10/12'>
          Start accept cryptocurrency for your online business today to boost your business growth with cheaper fees,faster settlements than fiat and easier to use.
        </p>
        
        {/* Banner Buttons */}
        <div className='flex justify-start items-center space-x-10 place-self-start w-full '>
            
            <button 
              className='px-10 py-4 text-xl shadow bg-amber-300 font-bold rounded'
              onClick={() => router.push("/auth/signin")}  
            >
              Get started
            </button>

            <button 
              className='px-10 py-4 text-xl shadow bg-blue-300 font-bold rounded'
              onClick={() => router.push("/contact")}  
            >
              Contact Us
            </button>

        </div>
        
      </div>


      {/* Right */}
      <div className='w-6/12 flex-col -space-y-42'>
          
            <Image
              className='cursor-pointer'
              src={CheckoutPage}
              layout="intrinsic" objectFit="contain"
              width={800} height={800}
            />

            <Image
              className='cursor-pointer'
              src={APIsSample}
              layout="intrinsic" objectFit="contain"
              width={800} height={800}
            />  
          
          
      </div>


    </div>
  )
}

export default LandingBanner