import { Idata } from "./Products";
import './Product.css'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./Pages/ProductFilter";
import { IForm } from "./UseApi";

export default function Product(props:Idata)
{
    const grid=useContext(UserContext)
    // console.log(grid)
    const navigate=useNavigate()
    return(     
 

        <div className={grid===3?'main_card':'main_card5'} onClick={()=>navigate('productinfo')}>
        <div className={grid===3?'card_img':'card_img5'}><img src={props.image} alt='' /></div>
        <div className="card_cat">{props.category}</div>
        <div className="card_price">Starting at {props.price}</div>  
        <div>{props.rating.rate}</div>
              
        </div>
    
       
        
    )
}