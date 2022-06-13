import { useState } from 'react'
import './Header.css'
export default function Header() {
    const [data,setData]=useState<boolean>(false);
    const low = <ul>
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
        <li>INDIE</li>
        <li>HOME AND KITCHEN</li>
        <li className='search_box'>


            <input type='search' placeholder=' Search Item'></input>
            <img src='https://rc.jiomeet.jio.com/assets/img/chat-search-icon.svg' />
        </li>
        <li className='fav_icon'>
            <img src='https://assets.ajio.com/static/img/wishlistIcon.svg' />
        </li>


    </ul>

    return (
        <nav className="Main-header">
            <div className='website-logo'>
                <img src='https://assets.ajio.com/static/img/Ajio-Logo.svg'></img>
            </div>
            <div className="upper-head">

                <ul>
                    <li><a>Sign in/Join Ajio</a></li>
                    <li><a>Customer Care</a></li>
                    <li className='btn-visit'>
                        <a>Visit Ajio</a>
                    </li>

                </ul>

            </div>
            <div className="lower-head">

                {low}

            </div>
         
        {data?<div className='sidebar'>
        <div className='hand_burger'onClick={()=>{setData(!data)}}>
                <img src='https://prestage.jioevents.com/assets/img/website/swap-me@2x.png'></img>
            </div>

            {low}
        </div>: <div className='hand_burger'onClick={()=>{setData(!data)}}>
                <img src='https://prestage.jioevents.com/assets/img/website/swap-me@2x.png'></img>
            </div>}
          

        </nav>

    )
}