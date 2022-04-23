import React from 'react'
import APIsSample from "../../../public/image/APIsSample.jpg"
import CheckoutPage from "../../../public/image/present/checkoutPage.png"
import CompletePage from "../../../public/image/present/completePage.png"
import ShopPage from "../../../public/image/present/ShopPage.png"
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
          Cryptocurrency Payment Infrastructure for Online Business
        </h1>

        {/* Banner Subtitle */}
        <p className='text-xl w-10/12'>
          Start accept cryptocurrency to reach global customers for your online business to boost your business growth with cheaper fees,faster settlements than traditional fiat currency cross-border payment.
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
      <div className='w-6/12 flex-col -space-y-42 my-10'>

            <div className='border-2 w-fit h-fit'>
              <Image
                className='cursor-pointer border-2'
                src={CheckoutPage}
                layout="intrinsic" objectFit="contain"
                width={800} height={467}
              />
            </div>
            
            <div className='border-2 w-fit h-fit mt-4'>
              <Image
                className='cursor-pointer'
                src={CompletePage}
                layout="intrinsic" objectFit="contain"
                width={800} height={467}
              />  
            </div>
          
          
      </div>


    </div>
  )
}

export default LandingBanner