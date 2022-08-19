import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Coursal from "../Corosual";
import { IForm } from "../UseApi";

interface Image
{
    url:string
}

export default function ProductDetails()
{
    const {product_id} = useParams<{ product_id: string }>();
    const [product,setProduct]=useState<IForm>();
    const [image,setimg]=useState<string[]>([])
    useEffect(()=>{
      
        async function api()
        {
            const response=await fetch((`https://productapimongoose.herokuapp.com/api/v1/product/${product_id}`))
            const data:{product:IForm}=await response.json()
            setProduct(data.product)
            console.log(data)
           setimg(data.product.images.map((item)=>{return item.url}))
               

            // setimg(data.images.filter((item)=>item.url))
            // console.log(data.images)
        }
        api()
    },[])
    
    return(
        <div>
          {/* {image} */}
            { image && <Coursal image={[...image]}></Coursal>}
           
        </div>

    )
}