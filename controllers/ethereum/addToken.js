const addToken = async (tokenCode) => {
    if(typeof window !== "undefined"){
        const {ethereum} = window;

        try {
            const wasAdded = await ethereum.request({
                    method: 'wallet_watchAsset',
                    params: {
                        type: 'ERC20',
                        options: tokensInfo[tokenCode],
                    },
            });
            if(wasAdded){
                console.log(`${tokenCode} was added.`)
            }else{
                console.log(`${tokenCode} wasn't added.`)
            }
        } catch (error) {
            alert(error);
        }
    }
}

let tokensInfo = {
    USDC:{
        address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        symbol: 'USDC',
        decimals: 18,
        image: 'https://etherscan.io/token/images/centre-usdc_28.png',
    },
    USDT:{
        address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        symbol: 'USDT',
        decimals: 18,
        image: 'https://etherscan.io/token/images/tether_32.png',
    },
    BUSD:{
        address: '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
        symbol: 'BUSD',
        decimals: 18,
        image: 'https://etherscan.io/token/images/binanceusd_32.png',
    }
}

export {addToken}