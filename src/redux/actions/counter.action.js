import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    RESET_COUNTER,
} from "../actionType";


export const incrementCounter = () => async (dispatch) => {
    console.log("Increment Counter middleware requested");
    dispatch({
        type: INCREMENT_COUNTER,
    });
};


export const decrementCounter = () => async (dispatch) => {
    console.log("Decrement Counter middleware requested");
    dispatch({
        type: DECREMENT_COUNTER,
    });
};


export const resetThunkCounter = () => async (dispatch) =>{
    console.log("Reset counter middleware requested");
    dispatch({
        type: RESET_COUNTER,
    });
};