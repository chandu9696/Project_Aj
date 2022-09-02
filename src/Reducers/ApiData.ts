
const initialState:any=
{
    loading:true,
    data:[]
}

//const list=[]
const FetchAPi= (state = initialState, action:any) => {
    switch (action.type) {
        case "Data_CALL": return {loading:false,data:action.payload};
        default: return state;
    }
}

export default FetchAPi;