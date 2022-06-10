import { useState } from "react"
import './Corosual.css'
export default function Coursal()
{
    const [current,setCurrent]=useState<number>(0);
    setTimeout(() => {
        if(current==images.length-1)
        setCurrent(0)
        else
        {
            setCurrent(current+1)
        }
    },3000);

    const images=
    [
        'https://images-eu.ssl-images-amazon.com/images/G/31/img21/June2022GW/New_FDFO_Stripe/Shoes_Deals/Homepage_DesktopHeroTemplate_3000x1200._CB636249551_.jpg',
       
       'https://images-eu.ssl-images-amazon.com/images/G/31/SmallAppliances-22/LA_SA_SummerPage-22/PC_FDFO-eos-june._CB636252795_.jpg',
       
       'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/MiniART-Jun/Women-Deals-Unrec-1500-Eng._CB636318050_.jpg'
     
    ]
    return(
        <div className="corosal">
        
            
        <img src={images[current]} onClick={()=>
        {
            console.log('test')
        }}/>
     
       
        </div>
    )
}