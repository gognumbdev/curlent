import Head from 'next/head'
import React from 'react'
import OrderInfo from '../../../components/payment/OrderInfo'
import ConfirmPayment from '../../../components/payment/ConfirmPayment'
import TrazorModelT from "../../../public/image/product/TrazorModelT.png"
import TrazorLogo from "../../../public/image/product/TrazorLogo.png"

const Preview = () => {
 
  return (
    <div className='bg-gray-50 grid grid-cols-1 py-14 h-screen place-items-center content-start w-full'>
        <Head>
            <title>Preview Curlent Payment</title>
        </Head>
        
        <div className='grid grid-cols-2 border-2 bg-white p-12 w-8/12'>
            {/* Consumer Order */}
            <OrderInfo 
                productImage={trazorModelT.productImage} businessImage={trazorModelT.businessImage} 
                businessName={trazorModelT.businessName} price={trazorModelT.price} website={trazorModelT.website}
                productName={trazorModelT.productName} productDescription={trazorModelT.productDescription}
            />
            
            {/* Confirm Payment */}
            <ConfirmPayment />

            

        </div>
    
        
    </div>
  )
}

export default Preview

let cryptoWallets = [
    {
        name:"MetaMask",
    },
    {
        name:"Coinbase Wallet",
    },
    {
        name:"WalletConnect",
    },
] 

let trazorModelT = {
    productImage:TrazorModelT,
    businessImage:TrazorLogo,
    businessName:"SatoshiLabs",
    website:"Trazor.io",
    price:206.01,
    productName:"Trazor Model T",
    productDescription:"The Trezor Model T is an advanced cryptocurrency hardware wallet. Store Bitcoin, passwords, tokens and other keys with confidence."
}