export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
//--------------ABOVE are action types------------------------

export interface CounterState {
    data: number;
    title: string;
}
const initialState: CounterState ={
    data: 42,
    title: "YARC (yet another redux counter)"
}

//-------------BELOW are action creators----------------------
export function increment(amount = 1){ //actions
    return {
        type: INCREMENT_COUNTER,
        payload: amount
    }
}
export function decrement(amount = 1){ //actions
    return {
        type: DECREMENT_COUNTER,
        payload: amount
    }
}
//-------------ABOVE are action creators----------------------



export default function counterReducer(state = initialState, action: any) {
    switch (action.type) {
        
        case INCREMENT_COUNTER:
            return{
                ...state,
                data: state.data + action.payload
            }

        case DECREMENT_COUNTER:
            return{
                ...state,
                data: state.data -  action.payload
            }
        default:
            return state;
    }
}