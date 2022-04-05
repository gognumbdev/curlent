import {CRYPTO,CURRENCY,TRANSACTION,PAYMENT} from "../actionTypes"

// LOGIN: Set User Data we get from wallets
export const selectCrypto  = (crypto) => async (dispatch) =>{
    try {
        dispatch({
            type: CRYPTO,
            payload: {
                crypto:crypto,
            }
        })    
    } catch (error) {
        console.log(error);
    }    
}

export const selectCurrency  = (currency) => async (dispatch) =>{
    try {
        dispatch({
            type: CURRENCY,
            payload: {
                currency:currency
            }
        })    
    } catch (error) {
        console.log(error);
    }    
}

export const selectTransaction  = (transaction) => async (dispatch) =>{
    try {
        dispatch({
            type: TRANSACTION,
            payload: {
                transaction:transaction,
            }
        })    
    } catch (error) {
        console.log(error);
    }    
}

export const selectPayment = (payment) => (dispatch) =>
  dispatch({
    type:PAYMENT,
    payload: {
        payment:payment
    },
})

