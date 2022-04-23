/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    devURL:"http://localhost:3000",
    mongoDB_URI:"mongodb+srv://gognumbdev:hGSNbHfUjvkJEg8j@mvp.t5iqj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    terra:{
      gognumbdev:{
        mnemonic:"discover cute culture talent deposit burst knock reason field dove priority syrup service turtle then top loyal shell aerobic media tone lunar armed toward"
      },
      merchant1:{
        mnemonic:"token purchase foam spy keep retreat service ramp tilt used illness project you call inherit fitness patch accident practice time issue alpha learn lady"
      },
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