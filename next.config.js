/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    devURL:"http://localhost:3000",
    terra:{
    }
    
  },
  smartContracts:{
    ropsten:{
      address:{
        simpleCryptoPayment:"",
      }
    },
    optimismKovan:{
      address:{
        simpleCryptoPayment:"",
      }
    },
    arbitumRinkeby:{
      address:{
        simpleCryptoPayment:"",
      }
    },
    bscTestnet:{
      address:{
        simpleCryptoPayment:"",
      }
    },
  },
  // domainName:"https://curlent.vercel.app/",

}

module.exports = nextConfig
