import {SIGNIN,SIGNOUT} from '../actionTypes.js'
import { InitailUserState } from '../reducers/userReducer.js';

// LOGIN: Set User Data we get from wallets
export const signIn = (userData) => async (dispatch) =>{
    try {
        dispatch({
            type: SIGNIN,
            payload: {
                businessName: userData.businessName,
                email: userData.email,
                firstName: userData.firstName,
                lastName: userData.lastName,
                receiveEmail: userData.receiveEmail,
                uid: userData.uid
            }
        })    
    } catch (error) {
        console.log(error);
    }    
}

export const signOut = () => (dispatch) =>
  dispatch({
    type:SIGNOUT,
    payload: {
        ...InitailUserState
    },
})

