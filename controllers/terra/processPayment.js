import { MnemonicKey, LCDClient } from '@terra-money/terra.js';
import { MsgSend } from '@terra-money/terra.js';
import { isTxError } from "@terra-money/terra.js";

const terra = new LCDClient({
    URL: 'https://lcd.terra.dev',
    chainID: 'columbus-5'
})

const processPaymentOnTerra = ({amount}) => {
    
    // 1.Create a wallet
    // You will first want to create a wallet which you can use to sign transactions.
    const mk = new MnemonicKey();
    
    const terra = new LCDClient({
        URL: 'https://soju-lcd.terra.dev',
        chainId: 'soju-0014'
    });
    
    // 2.Create messages
    const wallet = terra.wallet(mk);
    const send = new MsgSend(
        wallet.key.accAddress,
        "terra1p64fg74769ghzeqfnruvcu9lnd0ep49c8n4gpa",
        { uluna: amount/92.58 }
    );

    // 3.Create and Sign Transaction
    const tx = await wallet.createAndSignTx({
        msgs: [send],
        memo: "Hello Terra Payment !"
    });

    // 4.Broadcast transaction
    const txResult = await terra.tx.broadcast(tx);
    
    // 5.Check events
    if (isTxError(txResult)) {
        throw new Error(`encountered an error while running the transaction: ${txResult.code} ${txResult.codespace}`);
    }

    // check for events from the first message
    txResult.logs[0].eventsByType.store_code;
}

export {processPaymentOnTerra};

