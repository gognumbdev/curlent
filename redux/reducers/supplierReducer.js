import {EDITUSERNAME, LOGIN,LOGOUT, UPDATEASSETS,UPDATETRANSACTIONS} from "../actionTypes"

// Initial user state
export const InitailUserState = {
    username: "",
    publicAddress: "",
    assets:[],
    transactions:[]
}

const supplierReducer = (state = InitailUserState,{type,payload}) => {
    switch(type) {
        case LOGIN : 
            return {
                username: payload.username,
                publicAddress: payload.publicAddress,
            }
        case LOGOUT : 
            return {...InitailUserState}
        case UPDATEASSETS : 
            return {...state,assets:payload.assetsData}
        case UPDATETRANSACTIONS : 
            return {...state,transactions:payload.transactions}
        case EDITUSERNAME:
            return {...state,username:payload.username}
        default :
            return state
    }
}

export default supplierReducer;

// {
//     username: payload.username,
//     walletAddress: payload.walletAddress,
//     balance:payload.balance,
//     network:payload.network,
//     profileImage: payload.profileImage,
//     description: payload.description,
//     socialNetworks: payload.socialNetworks,
// }