export default function setConnectionState(state, connected){
    return {
        type: 'SET_CONNECTION_STATE',
        connected,
        state,
    }
}