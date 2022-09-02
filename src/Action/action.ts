interface IForm
{
    name:string,
    description:string,
    category:string,
    images:string[],
    price:number
}
const Data_CALL='Data_CALL'

export const incNumber = () => {
    const num=20;
    return {
        type: 'INCREMENT',
        payload:num
    }
}

export const decNumber = () => {
    return {
        type: 'DECREMENT'
    }
};

export const ApiData = () =>async(dispatch:any)=> {
 
    const response=await fetch(`https://productapimongoose.herokuapp.com/api/v1/product`)
    const data:{data:IForm[]}=await response.json()
    dispatch( {
        type: 'Data_CALL',
        payload:data.data
    })
}

// const getUser = () => {
//     return (dispatch) => {     //nameless functions
//       // Initial action dispatched
//       dispatch({ type: GET_CURRENT_USER });
//       // Return promise with success and failure actions
//       return axios.get('/api/auth/user').then(  
//         user => dispatch({ type: GET_CURRENT_USER_SUCCESS, user }),
//         err => dispatch({ type: GET_CURRENT_USER_FAILURE, err })
//       );
//     };
//   };