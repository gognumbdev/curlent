import {SIGNIN,SIGNOUT} from "../actionTypes"

// Initial user state
export const InitailUserState = {
    businessName: "",
    email: "",
    firstName: "",
    lastName: "",
    receiveEmail: false,
    uid: "",
    verified: false
}

const userReducer = (state = InitailUserState,{type,payload}) => {
    switch(type) {
        case SIGNIN : 
            return {
                businessName: payload.businessName,
                email: payload.email,
                firstName: payload.firstName,
                lastName: payload.lastName,
                receiveEmail: payload.receiveEmail,
                uid: payload.uid,
                verified: payload.verified
            }
        case SIGNOUT : 
            return {...InitailUserState}
        default :
            return state
    }
}

export default userReducer;

// {
//     username: payload.username,
//     walletAddress: payload.walletAddress,
//     balance:payload.balance,
//     network:payload.network,
//     profileImage: payload.profileImage,
//     description: payload.description,
//     socialNetworks: payload.socialNetworks,
// }