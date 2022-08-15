import { useEffect, useState } from "react"
interface Image
{
    url:string
}
interface IForm
{
    name:string,
    description:string,
    category:string,
    images:Image[],
    price:number
}
export default function UseApi()
{
    const [product,setProduct]=useState<IForm[]>([])
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
        const response=await fetch(`https://productapimongoose.herokuapp.com/api/v1/product?keyword=${name}`)
        const data:IForm=await response.json()
        console.log(data)
    }
    return(
        <div className='product_api_main'>
            <h1>This is page</h1>
                <input type='text' onChange={handleInput}/>

                <div className="product_all_data">
                    {product.map((item,i)=>{
                        return(
                            <>
                            <div>{item.name}</div>
                            <img src={item.images[0].url} style={{width:'200px'}}/>
                            </>
                        )
                    })}
                </div>
        </div>
    )
}