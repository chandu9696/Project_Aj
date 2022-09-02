import { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { incNumber,decNumber, ApiData} from '../Action/action'
import { IForm } from './UseApi';
export default function UsenRedux()
{
    const dispatch:any=useDispatch();
    const mystate=useSelector((state:any)=>state.changeTheNumber)
    const data=useSelector((state:any)=>state.FetchAPi)

    useEffect(()=>{
        dispatch(ApiData())
       
    },[dispatch])

    console.log(data.data)
    if(!data.loading)
    return(
    
        <>

{/*           
            <button onClick={()=>{dispatch(incNumber())}}>+</button>
            <p>{mystate}</p>
         

            <button onClick={()=>{dispatch(decNumber())}}>-</button> */}
            {data.data.map((item:IForm,key:number)=>{
                return(
                <div key={key}>
                    {item.name}
                </div>)

            })}
            
            
        </>
    )
    else
    {
        return<>Loading</>
    }
}