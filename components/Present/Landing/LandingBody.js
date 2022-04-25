import React from 'react'
import Image from "next/image"
import IconText from './IconText'
import CurlentBigLogo from "../../../public/logo/CurlentBig.png"
import CryptoGlobal  from "../../../public/icon/present/cryptoGlobal.png"
import HandsLove  from "../../../public/icon/present/handsLove.png"
import HandShake  from "../../../public/icon/present/handshake.png"
import Chart  from "../../../public/icon/present/chart.png"
import DigitalInfrastructure  from "../../../public/icon/present/digitalInfrastructure.png"

const LandingBanner = () => {
  return (
    <div className='flex w-8/12 place-self-center mb-14'>
      
      {/* Why Curlent ? */}
      <div className='grid grid-cols-1'>
        {/* Header */}
        <h1 className='text-4xl font-bold flex  items-center space-x-2 w-full place-self-start'>
            <span className='mr-2'>
              Why 
            </span>
            <Image
                className='cursor-pointer'
                src={CurlentBigLogo}
                layout="intrinsic" objectFit="contain"
                width={150} height={150}
                onClick={() => router.push("/")}
            />
        </h1>

        {/* Body */}
        <div className='flex w-full justify-center items-start'>
          {reasons.map((reason,index) => (
            <IconText
              key={index}
              type={reason.type}
              icon={reason.icon}  
              title={reason.title}
              description={reason.description}
              
            />
            
          ))}
            
        </div>
      </div>

    </div>
  )
}

export default LandingBanner

let reasons = [
  {
    type:"image",
    icon:CryptoGlobal,
    title:"Accept Global Payment",
    description:"Cryptocurrency is borderless technology so you can accept payment from any customers around the world through the internet for your online business growth."
  },
  {
    type:"image",
    icon:Chart,
    title:"Reduce Financial Tasks",
    description:"We serve you financial tasks such as Accounting,Invoices and Data Analytics relate to your cryptocurrency transaction powered by our platform. We need to help you focus on your main business and reduce your cryptocurrency-related tasks."
  },
  {
    type:"image",
    icon:HandsLove,
    title:"Easy to use",
    description:"We build easy to use products for you to intergate to your online business in a few steps instead work for a months to complete cryptocurrency development tasks realted to smart contract."
  },
  {
    type:"image",
    icon:HandShake,
    title:"Meet each needs",
    description:"We allow customer to pay with the crypto they want to pay and merchant can select the crypto they want to receive although it's another crypto that customer pay. So both customer and merchant have a choice for their payment mediums."
  },
]