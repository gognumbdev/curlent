import React, { useEffect, useState } from 'react'
import SelectCrypto from "./SelectCrypto"
import SelectCryptoWallet from "./SelectCryptoWallet"
import SelectBlockchain from "./SelectBlockchain"
import { requestPaymentOnMetaMask } from '../../controllers/processPayment'
import { addToken } from '../../controllers/ethereum/addToken'
import {handleSwitchNetwork,networkChanged,switchEthereumChain} from "../../controllers/ethereum/switchNetwork"
import CryptoPayment from "../../artifacts/contracts/payment/simplePayment.sol/CryptoPayment.json"
import { ethers } from 'ethers'
const config = require("../../next.config");
import { LCDClient } from '@terra-money/terra.js';


const ConfirmPayment = () => {
  const [email, setEmail] = useState("")
  const [amount, setAmount] = useState(206.01)
  const [blockchain, setBlockchain] = useState("Ropsten Test Network")
  const [crypto, setCrypto] = useState("ETH")
  const [cryptoWallet, setCryptoWallet] = useState("MetaMask")
  const [merchantAddress, setMerchantAddress] = useState("0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC")
  const [jsonRpcUrl, setJsonRpcUrl] = useState("https://ropsten.infura.io/v3/");
  
  // const [networkName, setNetworkName] = useState("Polygon Mainnet")
  // const provider = new ethers.providers.JsonRpcProvider(jsonRpcUrl);
  // const paymentContract = new ethers.Contract(config.smartContracts.simpleCryptoPayment, CryptoPayment.abi, provider)

  useEffect(() => {
    if(typeof window !== "undefined"){
      window.ethereum.on("chainChanged", networkChanged);

      return () => {
        window.ethereum.removeListener("chainChanged", networkChanged);
      };
    }
  }, []);

  console.log(blockchain,crypto,cryptoWallet,jsonRpcUrl);
  
  const handleConfirmPayment = () => {

    if(blockchain === "Terra Test Network") {
      console.log(`Consumer confirm to pay $ ${amount} as ${crypto} on ${cryptoWallet} , send transaction info to ${email}`);
    }else{
      
      console.log(`Consumer confirm to pay $ ${amount} as ${crypto} on ${cryptoWallet} , send transaction info to ${email}`);

      if(cryptoWallet === "MetaMask"){
        requestPaymentOnMetaMask(amount,crypto,cryptoWallet,email,merchantAddress);
      }else if(cryptoWallet==="Coinbase Wallet"){
        alert("This features is unavialable now,Please select new crypto wallet.")
      }
      
    }
  }

  // const handleAddToken = async (tokenCode) => {
  //   // Swtich Network first
  //   switch(tokenCode) {
  //     case "USDC":
  //       await switchEthereumChain(networks.ethereum.chainId).then(() => addToken(tokenCode));
  //       break;
  //     case "USDT":
  //       await switchEthereumChain(networks.ethereum.chainId);
  //       await addToken(tokenCode);
  //       break;
  //     case "BUSD":
  //       await switchEthereumChain(networks.bsc.chainId);
  //       await addToken(tokenCode);
  //       break;
  //     default:
  //       await switchEthereumChain(networks.ethereum.chainId);
  //       break;
  //   };
  // }

  return (
    <div className='h-full '>
      
        <p className='text-3xl font-bold'>Confirm Payment</p>

        
        
        {/* Payment Filter */}
        <div className='shadow-lg my-8 grid grid-cols-1 px-16 pb-10 rounded'>

            {/* Email */}
            <div className='space-y-2 my-4'>
                <p className='font-bold text-gray-500'>
                  Email
                </p>
                <input 
                  type="text" 
                  name={"Email"} 
                  value={email}
                  className="border-2 w-8/12 rounded px-4 py-3 focus:outline-blue-600 transition transform duration-150 ease-out"
                  onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            
            {/* Select Stablecoin */}
            <SelectBlockchain setBlockchain={setBlockchain} setJsonRpcUrl={setJsonRpcUrl} />

            {/* Select Stablecoin */}
            <SelectCrypto setCrypto={setCrypto} blockchain={blockchain} />

            {/* Select Wallet */}
            <SelectCryptoWallet setCryptoWallet={setCryptoWallet} blockchain={blockchain} />

            <button 
              onClick={handleConfirmPayment}
              className='shadow bg-amber-300 py-4 text-xl font-bold my-10 w-8/12 place-self-center rounded '>
              Pay $ {amount}
            </button>
            
           

        </div>

    </div>
  )
}

export default ConfirmPayment


