import { useState } from "react"
interface IForm
{
    name:string,
    profile:string
}
export default function FileUploadInReact()
{
    // const [file,Setfile]=useState<string>('')
    const [preview,SetPreview]=useState<string | any>('')
    const [text,Settext]=useState<string>('')
   
    function handleFile(e:any)
    {
        console.log(e.target.files[0].size)
        const file_data=e.target.files[0];
        PreviewFile(file_data)
    }
    function handleText(e:any)
    {
        // console.log(e.target.files[0].size)
        // const file_data=e.target.files[0];
        // PreviewFile(file_data)
        Settext(e.target.value)
        console.log(text)
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
            name:text,
            profile:preview
        }

        console.log(SendObj)
    }
    return(
<>
        <form onSubmit={handleSumit}>
            <input type='text' onChange={(e)=>handleText(e)}/>
            <input type='file' onChange={(e)=>handleFile(e)}/>
            <button type="submit">Submit</button>
        </form>
        <img src={preview} style={{width:'400px'}}alt=''/>
        </>
    )
}