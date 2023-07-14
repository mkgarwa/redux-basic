const initialState = 0;

const counter = (state = initialState, action) => {
    switch(action.type) {
        case "INCREMENT":
            return Math.max(0, state + action.payload);
        case "DECREMENT":
            return Math.max(0, state - action.payload);
        default:
            return state;
    }
}

export default counter;