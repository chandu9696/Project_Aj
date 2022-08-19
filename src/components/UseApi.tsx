import { useEffect, useState } from "react"
import Product from "./Product"
import './UseApi.css'
interface Image
{
    url:string
}
export interface IForm
{
    _id:string,
    name:string,
    description:string,
    category:string,
    images:Image[],
    price:number
}
export default function UseApi()
{
    const [product,setProduct]=useState<IForm[]>([])
    const [SearchProduct,setSeearchProduct]=useState<IForm[]>([])
    const [indicate,SetIndicate]=useState<boolean>(false)
    useEffect(()=>{
        async function api()
        {
        const response=await fetch(`https://productapimongoose.herokuapp.com/api/v1/product`)
        const data:{data:IForm[]}=await response.json()
        console.log(data)
        setProduct(data.data)
        }

        api()
    },[])

const handleInput=async(e:any)=>{
         const name=e.target.value
         if(name.length===0)
         {
            SetIndicate(false)
          
         }
         if(!(/^\s*$/.test(name)) || name.length!=0)
         {
        const response=await fetch(`https://productapimongoose.herokuapp.com/api/v1/product?keyword=${name}`)
        const data:{data:IForm[]}=await response.json()
        setSeearchProduct(data.data)
        SetIndicate(true)
         }
         else
         {
            setSeearchProduct([])
         }
   
    }  
    return(
        <div className='product_api_main'>
            <h1>This is page</h1>
                <input type='text' onChange={handleInput}/>

                <div className={indicate?"product_search":"product_search1"}>
                    {SearchProduct.length!=0?SearchProduct.map((item,i)=>{
                        
                        return(
                            <div className="search_template" key={i}>
                            <img src={item.images[0].url}/>
                            <div>{item.name}</div>
                            <div>{item.category}</div>
                            </div>
                        )
                    }):<h1>No product Matched</h1>}
                </div>
                {/* <div className="main_product" id={props.name}>
                {productdata.map((item,index)=>{
                    return()
                })}
             </div> */}
                {/* <div className="product_all_data">
                    {product.map((item,index)=>{
                        return(<Product {...item} key={index}></Product>
                        )
                    })}
                </div> */}
        </div>
    )
}