import { useEffect, useState } from "react"
import './Corosual.css'
interface images
{
    image:string[]
}
export default function Coursal(props:images)
{
   
    const [current,setCurrent]=useState<number>(0);
    // console.log(props.image,current)
    useEffect(()=>{
        return()=>{
            clearTimeout(timeout)
        }
    })
   const timeout= setTimeout(() => {
        if(current===props.image.length-1)
        setCurrent(0)
        else
        {
            setCurrent(current+1)
        }
    },3000);

 
    return(
        <div className="corosal">
        
            
        <img src={props.image[current]} alt='' onClick={()=>
        {
            console.log('test')
        }}/>
     
       
        </div>
    )
    
}