import { useState } from "react";
import './ApiTest.css';
interface IForm
{
    name:string,
    description:string,
    category:string,
    images:string,
    price:number
}

export default  function Apitest()
{
    // const [file,Setfile]=useState<string>('')
    const [preview,SetPreview]=useState<string | any>('')
    const [message,Setmessage]=useState<string>('')
   const [formdata,setformdata]=useState<IForm>({name:'',description:'',category:'',images:'',price:-1})
    function handleFile(e:any)
    {
        console.log(e.target.files[0].size)
        const file_data=e.target.files[0];
        PreviewFile(file_data)
    }
    const handleText=(e:any)=>{
        // console.log(e.target.files[0].size)
        // const file_data=e.target.files[0];
        // PreviewFile(file_data)
        if(e.target.value==='price') setformdata(prev=>({...prev,[e.target.name]:Number(e.target.value)}))
        else
        setformdata(prev=>({...prev,[e.target.name]:e.target.value}))

    }
    function PreviewFile(file_data:any)
    {
        const reader=new FileReader()
        reader.readAsDataURL(file_data);
        reader.onloadend=()=>{
            SetPreview(reader.result)
        }
    }
    function handleSumit(e:any)
    {
        e.preventDefault();
        console.log("submit")

        const SendObj:IForm={
            ...formdata,
            images:preview
        }
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify(SendObj);
          
          const requestOptions:any= {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          
          fetch("https://productapimongoose.herokuapp.com/api/v1/product/new", requestOptions)
            .then(response => response.json())
            .then((result)=>{console.log(result)
            Setmessage('uploaded sucessfully')})
            .catch(error => {console.log('error', error);
            Setmessage('Error in Uploading') })

        console.log(SendObj)
    }
    return(<div className="product_add">
        <h4>Product Add</h4>
    <form onSubmit={handleSumit} className='form_product'>
            {/* <input type='text' onChange={(e)=>handleText(e)}/> */}

            <div>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' onChange={handleText}/>
            </div>
            <div>
            <label htmlFor='description'>Description</label>
            <input type='text' name='description' id='description'  onChange={handleText}/>
            </div>
             <div>
            <label htmlFor='category'>Category</label>
            <input type='text' name='category' id='description'  onChange={handleText}/>
            </div>
            <div>
            <label htmlFor="image_pro">Add Product Image</label>
            <input type='file' onChange={(e)=>handleFile(e)} id='image_pro'/>
            </div>
            <div>
            <label htmlFor='price'>Price</label>
            <input type='text' name='price' id='price'  onChange={handleText}/>
            </div>
            <div>
            <button type="submit">Submit</button>
             </div>
        </form>
     { message && <h1>{message}</h1>}
    </div>)

}