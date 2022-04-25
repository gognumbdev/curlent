import { ethers } from "ethers";
import { verifyMessage } from "./connectWallet";

const requestPaymentOnMetaMask = async (amount,crypto,cryptoWallet,email,merchantAddress) => {
    if (typeof window !== "undefined") {
        try {
            const {ethereum} =window;

            await ethereum.enable()
            
            let ethAmount;
            if(crypto !== "MATIC"){
                console.log(`${crypto} : `,ethAmount)
                ethAmount = amount/coinValue[crypto];
            }else if (crypto === "MATIC"){
                console.log(`${crypto} : `,ethAmount)
                ethAmount = 0.5;
            }
            
            
            let requestMessage = `Payment info : You will pay $ ${amount} as ${ethAmount.toFixed(4)} ${crypto} on ${cryptoWallet}. \nPlease sign this request from Curlent to make your payment successful. \nAfter this payment successfully process we will send you email about transaction info to ${email}`;
            
            try {
                
                // check merchant addresss
                ethers.utils.getAddress(merchantAddress)

                if(ethereum.isMetaMask){
                    //* Get user log in with Metamask wallet 
                    const provider = new ethers.providers.Web3Provider(ethereum)
                    const signer =  provider.getSigner();
                    const signature = await signer.signMessage(requestMessage);
                    const userAddress = await signer.getAddress();
                    let permission = await verifyMessage(
                        {
                            message:requestMessage,
                            address:userAddress,
                            signature
                        }
                    )
                    console.log(permission)
                    
                    //* Successfuly receive permission from consumer to make payment
                    if(permission){
                        console.log("Ether : ",ethAmount)
                        const tx = await signer.sendTransaction({
                            to:merchantAddress,
                            value:ethers.utils.parseEther(ethAmount.toString())
                        })
                        return tx ;
                    }
                }

                return "Nothing" ;


            } catch (error) {
                alert(error.message)
            }
        }catch (error) {
            console.log(error)
        }
    }    
}

export {requestPaymentOnMetaMask}

let coinValue = {
    ETH:3090.97,
    BNB:402.97,
    LUNA:92.27,
    MATIC:1.31,
    USDC:1,
    USDT:1,
    BUSD:1,
    UST:1
}