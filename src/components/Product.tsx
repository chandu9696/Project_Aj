import { Idata } from "./Products";
import './Product.css'
export default function Product(props:Idata)
{
    return(     
 
        <div className="main_card">
        <div className="card_img"><img src={props.image} alt='' /></div>
        <div className="card_cat">{props.category}</div>
        <div className="card_price">Starting at {props.price}</div>  
              
        </div>
    
       
        
    )
}