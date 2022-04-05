import { ethers } from "ethers";


const signBanking = async (username,amount,transaction,asset) => {
    let requestMessage = `Please sign this request to confirm your ${transaction} ${amount} ${asset} for account  ${username}`

    if (typeof window !== "undefined") {
        try {
            const {ethereum} =window;
        
            await ethereum.enable()

            //* Get user sign transaction with Metamask wallet 
            const provider = new ethers.providers.Web3Provider(ethereum)
            const signer =  provider.getSigner();
            const signature = await signer.signMessage(requestMessage);
            const userAddress = await signer.getAddress();

            try {
                const signerAddress = ethers.utils.verifyMessage(requestMessage, signature);
                if (signerAddress === userAddress) {
                    console.log("You get permission.")
                    return true
                }else{
                    console.log("You don't get permission.")
                    return false;
                }
              } catch (err) {
                  console.log(err);
                  return false;
              }

        } catch (error) {
            return false
        }
    }
}



export {signBanking}