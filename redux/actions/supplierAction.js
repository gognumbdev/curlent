import {EDITUSERNAME, LOGIN,LOGOUT,UPDATEASSETS,UPDATETRANSACTIONS} from '../actionTypes.js'
import { InitailUserState } from '../reducers/supplierReducer.js';

// LOGIN: Set User Data we get from wallets
export const logIn = (userData) => async (dispatch) =>{
    try {
        dispatch({
            type: LOGIN,
            payload: {
                username: userData.username,
                publicAddress: userData.publicAddress,
            }
        })    
    } catch (error) {
        console.log(error);
    }    
}

// LOGOUT: clear User Data we get from wallets
export const logOut = () => (dispatch) =>
  dispatch({
    type:LOGOUT,
    payload: {
        ...InitailUserState
    },
})

// UPDATEASSETS: update assets info of supplier
export const updateAssets = (assetsData) => (dispatch) =>{
    try {
        console.log("update assets",assetsData)
        dispatch({
            type: UPDATEASSETS,
            payload: {
                assetsData
            }
        })    
    } catch (error) {
        console.log(error);
    }  
}


// UPDATRANSACTIONS: update transactions history of supplier
export const updateTransactions = (transactions) => (dispatch) =>{
    try {
        dispatch({
            type: UPDATETRANSACTIONS,
            payload: {
                transactions
            }
        })    
    } catch (error) {
        console.log(error);
    }  
}

// editUsername
export const editUsername = (newUsername) => async (dispatch) =>{
    try {
        dispatch({
            type: EDITUSERNAME,
            payload: {
                username: newUsername,
            }
        })    
    } catch (error) {
        console.log(error);
    }    
}

    