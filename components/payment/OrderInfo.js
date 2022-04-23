import React from 'react'
import Image from "next/image"

const OrderInfo = ({productImage,businessImage,businessName,website,price,productName,productDescription}) => {
  return (
    <div className='space-y-10'>
        <p className='text-3xl font-bold'>Your order</p>
        
        {/* Online Business Info */}
        <div className='flex space-x-4'>
            <Image src={businessImage} width={50} height={50} objectFit="contain" />
            <div className='space-y-2 p-2'>
                <p className='font-medium'>{businessName}</p>
                <p className='text-gray-500'>{website}</p>
            </div>
        </div>

        {/* Preview Product */}
        <div className='grid grid-cols-1 place-items-center'>
            <Image src={productImage} width={200} height={200} objectFit="cover" />
        </div>
        

        {/* Order Info */}
        <div className='space-y-4 w-full'>
            {/* Price in USD*/}
            <p className='text-2xl font-medium'>
                $ {price}
            </p>

            {/* Product Name */}
            <p className='text-2xl font-medium'>
                {productName}
            </p>

            {/* Product Description */}
            <p className='w-10/12'>
                {productDescription}
            </p>

        </div>

    </div>
  )
}

export default OrderInfo