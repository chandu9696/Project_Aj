const initialState = 10;
//const list=[]
const changeTheNumber = (state = initialState, action:any) => {
    switch (action.type) {
        case "INCREMENT": return state + action.payload;
        case "DECREMENT": return state - 1;
        default: return state;
    }
}

export default changeTheNumber;