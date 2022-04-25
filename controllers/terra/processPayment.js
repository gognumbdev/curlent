import { MnemonicKey, LCDClient,MsgSend,isTxError, Coins,Fee } from '@terra-money/terra.js';


const processPaymentOnTerra = async ({amount}) => {
    
    // 1.Create a wallet
    // You will first want to create a wallet which you can use to sign transactions.
    const mk = new MnemonicKey({
        // mnemonic:config.env.terra.gognumbdev.mnemonic
        mnemonic:"discover cute culture talent deposit burst knock reason field dove priority syrup service turtle then top loyal shell aerobic media tone lunar armed toward"
    });
    
    const terra = new LCDClient({
        URL: 'https://bombay-lcd.terra.dev',
        chainID: 'bombay-12',
      });

    // a wallet can be created out of any key
    // wallets abstract transaction building
    const wallet = terra.wallet(mk);
    

    //2.Create messages
    const send = new MsgSend(
        wallet.key.accAddress,
        "terra1p64fg74769ghzeqfnruvcu9lnd0ep49c8n4gpa",
        {uluna: 1000000, ukrw: 1230201, uusd: 1312029  }
    );

    // 3.Create and Sign Transaction
    await wallet.createAndSignTx({
        msgs: [send],
        memo: "Hello Terra Payment !"
    })
    .then(tx => terra.tx.broadcast(tx))
    .then(result => console.log(`TX hash : ${result.txhash}`));
}

export {processPaymentOnTerra};

let merchantInfo = {
    merchant1:{
        terraAddress:"terra1p64fg74769ghzeqfnruvcu9lnd0ep49c8n4gpa"
    }
}