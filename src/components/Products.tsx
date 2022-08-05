import { useEffect, useState } from "react"
import Product from "./Product"
import './Products.css'
interface Irate
{
    rate:number,
    price:number
}
export interface Idata
{
    id:number
    title:string,
    price:number,
    category:string,
    image:string,
    rating:Irate
  
   
}
interface Iname
{
    name:string
}
export default function Products(props:Iname)
{
    function ScrollLeft()
    {
        const ele=document.getElementById(props.name)
        if(ele)
        ele.scrollLeft= ele.scrollLeft-300;
        console.log('called')
    }
    function ScrollRight()
    {
        const ele=document.getElementById(props.name)
        if(ele)
        ele.scrollLeft= ele.scrollLeft+300;
        console.log('called')
    }

    const [productdata,SetProductData]=useState<Idata[]>([])
    useEffect(()=>{

      
        async function api()
        {
             const response= await fetch('https://fakestoreapi.com/products')
             const data:Idata[]=await response.json()
             SetProductData(data)
             console.log(data)
             console.log('called api')
        }
        api()
       
      
    },[])

    return(
        <div className="section_products">
            <img src='https://assets.ajio.com/cms/AJIO/WEB/D-JITstatics-header.jpg' className='header_image'/>
             <button onClick={()=>{ScrollLeft()}} className='btn_left'>&#8249;</button>
             <button onClick={()=>{ScrollRight()}} className='btn_right'>&#8250;</button>
             <div className="main_product" id={props.name}>
                {productdata.map((item,index)=>{
                    return(<Product {...item} key={index}></Product>)
                })}
             </div>
           
        </div>
       
    )
}