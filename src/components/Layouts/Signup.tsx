import { useState } from "react";
interface IUser
{
    name:string,
    email:string,
    password:string,
    avatar:string
}
export default function SignUp()
{
    const [preview,SetPreview]=useState<string>('')
    const [email,setemail]=useState<string>('')
    const [password,setpassword]=useState<string>('')
    const [name,setname]=useState<string>('')
    const [message,Setmessage]=useState<string>('')
    function handleFile(e:any)
    {
        console.log(e.target.files[0].size)
        const file_data=e.target.files[0];
        PreviewFile(file_data)
    }
    function handleName(e:any)
    {
        setname(e.target.value)
    }
    function hadleEmail(e:any)
    {
        setemail(e.target.value)
    }
    function handlePass(e:any)
    {
        setpassword(e.target.value)
    }
    function PreviewFile(file_data:any)
    {
        const reader=new FileReader()
        reader.readAsDataURL(file_data);
        reader.onloadend=()=>{
            SetPreview(reader.result as string)
        }
    }

    function handleSubmit(e:any)
    {
        e.preventDefault()
        const sendObj:IUser={
            name:name,
            email:email,
            password:password,
            avatar:preview
        }

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify(sendObj);
          
          const requestOptions:any= {
            method: 'POST',

            headers: myHeaders,
            body: raw,
          credentials: 'include'
          };
          
          fetch("https://productapimongoose.herokuapp.com/api/v1/register", requestOptions)
            .then(response => response.json())
            .then((result)=>{console.log(result)
            Setmessage('uploaded sucessfully')})
            .catch(error => {console.log('error', error);
            Setmessage('Error in Uploading') })

    }
    return(
        <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleName}/>
        <input type='text' onChange={hadleEmail}/>
        <input type='password' onChange={handlePass}/>
        <input type='file' onChange={handleFile}/>
        <button type='submit'>Submit</button>
        </form>
    ) 
}