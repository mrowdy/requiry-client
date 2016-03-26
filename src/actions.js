export const SET_CONNECTION_STATE = 'SET_CONNECTION_STATE'
export const SET_STATE = 'SET_STATE'

export function setConnectionState(state, connected){
    return {
        type: SET_CONNECTION_STATE,
        connected,
        state,
    }
}

export function setState(state){
    return {
        type: SET_STATE,
        state,
    }
}