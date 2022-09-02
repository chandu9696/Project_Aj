import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Coursal from "../Corosual";
import Header from "../Layouts/Header";
import { IForm } from "../UseApi";
import './ProductDetails.css';
interface Image
{
    url:string
}

export default function ProductDetails()
{
    const {product_id} = useParams<{ product_id: string }>();
    const [product,setProduct]=useState<IForm>();
    const [image,setimg]=useState<string[]>([])
    const [current,setCurrent]=useState<number>(0)
    const [current1,setCurrent1]=useState<number>(0)
    const [showacc,Setacc]=useState<boolean>(true)

    useEffect(()=>{
      
        async function api()
        {
            const response=await fetch((`https://productapimongoose.herokuapp.com/api/v1/product/${product_id}`))
            const data:{product:IForm}=await response.json()
            setProduct(data.product)
            console.log(data)
           setimg(data.product.images.map((item)=>{return item.url}))
               
            setCurrent(0)
            setCurrent1(0)
            Setacc(true)
            // setimg(data.images.filter((item)=>item.url))
            // console.log(data.images)
        }
     
        api()
    },[product_id])
    useEffect(()=>{
        const timeout= setInterval(() => {
            setCurrent((prev)=>prev+1)
          },5000);
        return()=>{
            clearTimeout(timeout)
            }
    },[])
   

    function Manage_current()
    {
     
            setCurrent((prev)=>prev+1)

    
    }
    function Manage_current1()
    {
        if(current1===0)
        setCurrent1((image.length-1))
        else
        {
            setCurrent1((prev)=>prev-1)
        }

    }
    return(
        <>
          <Header/>
        <div className="Main_product_details">
            <div className="Main_product_wrap">
                <div className="left_corosal">
               
                   <div className='left_corosal_ac'>
                   <button className="btn_up" onClick={()=>Manage_current()}>Up</button>
                        <img src={image[current%image.length]}/>
                        <img src={image[(current+1)%image.length]}/>
                        <img src={image[(current+2)%image.length]}/>
                        <img src={image[(current+3)%image.length]}/>
                        <img src={image[(current+4)%image.length]}/>
                        <img src={image[(current+5)%image.length]}/>
                        <button className="btn_down" onClick={()=>{Manage_current()}}>Down</button>
                   </div>
             
                </div>
                <div className="middle_corosal">
                    <div className="middle_corosal_ac">
                        <button onClick={()=>{Manage_current1()}}>left</button>
                        <img src={image[current1]}/>
                        <button onClick={()=>{Manage_current1()}}>right</button>
                    </div>
                    <div className="accordian">
                        <div className="option_acc">
                            <div className={showacc?'active_acc':''}onClick={()=>{Setacc(true)}}>Return</div>
                            <div className={!showacc?'active_acc':''}onClick={()=>{Setacc(false)}}>Our Promise</div>
                        </div>
                        <div className="ans_acc">
                         { showacc?<div>Easy 15 days return, exchange unavailable. Returns Policies Returns Policies
                            Returns Policies
                            Returns Policies Returns Policies </div>:<div>We assure the authenticity and quality of our products</div>}

                        </div>
                    </div>
                </div>
                <div className="right_data">
                    <div className="_name">
                    <h3>{product?.name}</h3>
                    </div>
                    <div  className="_name">
                    <h3>{product?.description}</h3>
                    </div>
                    <div className="_name">
                    <h3>Rs.{product?.price}</h3>
                    </div>
                    <div className="offers_info">
                        <div className="boxes">
                        <div className="first_box">----offer-----</div>
                        <div className="sec_box">Get it for ₹1404</div>
                        </div>
                        <div className="info_box">
                        <div className="Coupen_info">Appply Cupon here </div>
                        <div className="detail_info">Get Upto Extra 15% Off on 1990 and above. Max Discount Rs. 1600. View All Products</div>
                        </div>
                    </div>
                    <div className="Select_size">
                        <h5>Select Size</h5>
                        <div className="Size_Option">
                            <div>29</div>
                            <div>29</div>
                            <div>29</div>
                            <div>29</div>
                            <div>29</div>
                            <div>29</div>
                            <div>29</div>
                            <div>29</div>
                            <div>29</div>
                        </div>
                    </div>
                    <div className="add_btn">
                    <div className="add_bag"><p>Add to Bag</p></div>
                    <p className="slo">HANDPICKED STYLES | ASSURED QUALITY</p>
                    </div>
                    <div className="add_btn">
                    <div className="add_bag"><p>Save to WishList</p></div>
                    </div>
                    <div className="product_detail">
                        <h3>Product Details</h3>
                        <ul>
                            <li>Best</li>
                            <li>Best</li>
                            <li>Best</li>
                            <li>Best</li>
                            <li>Best</li>
                            <li>Other Details</li>
                        </ul>
                    </div>
                </div>
    
    

            </div>
            <div className="company_info">
                <div className="title_company">
                <h1><span>About {product?.name}</span></h1>
                </div>
                <div className="company_about">
                    <div className="company_logo">
                        logo
                    </div>
                    <div className="company_text">
                    Flaunt the modern-day classics with intrinsically American Levi’s clothing. AJIO brings the ever-stylish 511 Levi’s jeans, rugged denim trucker jackets, figure flattering women’s skinny jeans, charming printed shirts and more from Levi’s online!
                    </div>

                </div>
                
            </div>
          
           
        </div>
        </>

    )
}