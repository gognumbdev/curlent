import React, { useCallback, useEffect, useState } from 'react'
import SelectCrypto from "./SelectCrypto"
import SelectCryptoWallet from "./SelectCryptoWallet"
import SelectBlockchain from "./SelectBlockchain"
import { requestPaymentOnMetaMask } from '../../controllers/processPayment'
import {handleSwitchNetwork,networkChanged,switchEthereumChain} from "../../controllers/ethereum/switchNetwork"
const config = require("../../next.config");
import {testnetFaucet} from "../../database/testnetInfo"
import { useRouter } from 'next/router'
import TransactionSuccess from './TransactionSuccess'

const ConfirmPayment = () => {
  const router = useRouter();
  const [email, setEmail] = useState("")
  const [amount, setAmount] = useState(206.01)
  const [blockchain, setBlockchain] = useState("Ropsten Test Network")
  const [crypto, setCrypto] = useState("ETH")
  const [cryptoWallet, setCryptoWallet] = useState("MetaMask")
  const [merchantAddress, setMerchantAddress] = useState("0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC")
  const [jsonRpcUrl, setJsonRpcUrl] = useState("https://ropsten.infura.io/v3/");
  
  const [txResult, setTxResult] = useState(null);
  const [txError, setTxError] = useState(null);

  useEffect(() => {
    if(typeof window !== "undefined"){
      window.ethereum.on("chainChanged", networkChanged);

      return () => {
        window.ethereum.removeListener("chainChanged", networkChanged);
      };
    }
  }, []);

  console.log(blockchain,crypto,cryptoWallet,jsonRpcUrl);
  
  const handleConfirmPayment = async () => {
      console.log(`Consumer confirm to pay $ ${amount} as ${crypto} on ${cryptoWallet} , send transaction info to ${email}`);

      if(cryptoWallet === "MetaMask"){
        let tx = await requestPaymentOnMetaMask(amount,crypto,cryptoWallet,email,merchantAddress);
        console.log("tx info",tx)
        setTxResult(tx);
      }else if(cryptoWallet==="Coinbase Wallet"){
        alert("This features is unavialable now,Please select new crypto wallet.")
      }

  }

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
            
            <SelectBlockchain setTxResult={setTxResult} setBlockchain={setBlockchain} setJsonRpcUrl={setJsonRpcUrl} />

            <SelectCrypto setCrypto={setCrypto} blockchain={blockchain} setTxResult={setTxResult}/>
            <a target="_blank" href={testnetFaucet[blockchain]} rel="noopener noreferrer">
              <p className='text-blue-500 cursor-pointer hover:text-black'>
                Don&apos;t have {crypto} on {blockchain} ? Click this link ! 
              </p>
            </a>
            
            {/* Select Wallet */}
            <SelectCryptoWallet setCryptoWallet={setCryptoWallet} blockchain={blockchain} />
            {/* <SelectCryptoWallet setCryptoWallet={setCryptoWallet} blockchain={blockchain} /> */}

            {/* Payment ! */}
            <button 
              onClick={handleConfirmPayment}
              className='shadow bg-amber-300 py-4 text-xl font-bold my-10 w-8/12 place-self-center rounded '>
              Pay $ {amount}
            </button>


            {/* Ropsten Test Network Payment result */}
            {((blockchain === "Ropsten Test Network") && txResult) && (
              <TransactionSuccess 
                txResult={txResult} blockchain={blockchain} 
                href={`https://ropsten.etherscan.io/tx/${txResult?.hash}`} 
                bg={"bg-gray-500"}
                text={"text-white"}
                blockExplorer={"Ropsten Etherscan"}
              />
            )}

            {/* BSC Test Network Payment result */}
            {((blockchain === "BSC Test Network") && txResult) && (
              <TransactionSuccess 
                txResult={txResult} blockchain={blockchain} 
                href={`https://testnet.bscscan.com/tx/${txResult?.hash}`} 
                bg={"bg-amber-300"}
                text={"text-black"}
                blockExplorer={"Testnet BSCScan"}
              />
            )}

            {/* Optimism Kovan Payment result */}
            {((blockchain === "Optimism Kovan") && txResult) && (
              <TransactionSuccess 
                txResult={txResult} blockchain={blockchain} 
                href={`https://kovan-optimistic.etherscan.io/tx/${txResult?.hash}`} 
                bg={"bg-red-500"}
                text={"text-white"}
                blockExplorer={"Optimistic Kovan Etherscan"}
              />
            )}

            {/* Polygon Mumbai Payment Result */}
            {((blockchain === "Polygon Mumbai") && txResult) && (
              <TransactionSuccess 
                txResult={txResult} blockchain={blockchain} 
                href={`https://mumbai.polygonscan.com/tx/${txResult?.hash}`} 
                bg={"bg-violet-500"}
                text={"text-white"}
                blockExplorer={"Terra Finder"}
              />
            )}

         
        </div>

    </div>
  )
}

export default ConfirmPayment