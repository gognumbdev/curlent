import {CRYPTO,CURRENCY,TRANSACTION,PAYMENT} from "../actionTypes"
import BNB from "../../public/icons/crypto/BNB.png"
import BTC from "../../public/icons/crypto/BTC.png"
import THB from "../../public/icons/currency/jpgSeries/THB.jpg"
import { useSelector } from "react-redux"
import { DeviceMobileIcon } from "@heroicons/react/outline"
// Initial user state
export const InitailUserState = {
    crypto:{
        code:"BTC",
        name:"Bitcoin",
        blockchain:"Bitcoin blockchain",
        image:BTC
    },
    currency:{
        code:"THB",
        name:"Thai bath",
        image:THB
    },
    transaction:"buy",
    payment:
    {
        name:"Mobile Banking (Promptpay)",
        icon:<DeviceMobileIcon className='h-10 text-blue-500' />
    },
}



const tradeReducer = (state = InitailUserState,{type,payload}) => {
    switch(type) {
        case CRYPTO : 
            return {
                ...state,
                crypto:payload.crypto
            }
        case CURRENCY : 
            return {
                ...state,
                currency:payload.currency
            }
        case TRANSACTION : 
            return {
                ...state,
                transaction:payload.transaction
            }
        case PAYMENT : 
            return {
                ...state,
                payment:payload.payment
            }
        default :
            return state
    }
}

export default tradeReducer;
