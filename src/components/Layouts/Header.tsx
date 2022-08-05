import { useState } from 'react'
import './Header.css'
export default function Header() {
    const [data,setData]=useState<boolean>(false);
  
    const hover_section= <div className='hover_main'>
    <div className='hover_warp'>
      <div className='first_row'>
            <div className='class_by'><span>Shop By:&nbsp;&nbsp;&nbsp;</span></div>
            <div className='category'><span>Categories</span></div>
            <div className='brands'><span>Brands</span></div>
      </div>
       <div className='sec_row'>
        <div className='first_grid_row'>
            <div><h5>CLOTHING</h5></div>
            <div>Two</div>
            <div>One</div>
            <div>Two</div>
            <div>One</div>
            <div>Two</div>
            <div>One</div>
            <div>Two</div>
        </div>
        <div className='first_grid_row'>
        <div><h5>CLOTHING</h5></div>
            <div>Two</div>
            <div>One</div>
            <div>Two</div>
            <div>One</div>
            <div>Two</div>
            <div>One</div>
            <div>Two</div>
        </div>
      
        <div className='first_grid_row'>
        <div><h5>CLOTHING</h5></div>
            <div>Two</div>
            <div>One</div>
            <div>Two</div>
            <div>One</div>
            <div>Two</div>
            <div>One</div>
            <div>Two</div>
        </div>
        <div className='first_grid_row'>
        <div><h5>CLOTHING</h5></div>
            <div>Two</div>
            <div>One</div>
            <div>Two</div>
            <div>One</div>
            <div>Two</div>
            <div>One</div>
            <div>Two</div>
        </div>
    
       </div>
    </div>

</div>
    const low = <ul>
        <li className='hover_tile'><span>MEN</span></li>
        {hover_section}
        <li className='hover_tile'><span>WOMEN</span></li>
        {hover_section}
        <li className='hover_tile'><span>KIDS</span></li>
        {hover_section}
        <li className='hover_tile'><span>INDIE</span></li>
        {hover_section}
        <li><span className='hover_tile'>HOME AND KITCHEN</span></li>
        {hover_section}
        <li className='search_main'>


            <div className='search_box'>

            <input type='search' className='search' placeholder=' Search Item'></input>
            <img src='https://rc.jiomeet.jio.com/assets/img/chat-search-icon.svg' alt=''  />
            </div>
        </li>
        <li className='fav_icon'>
            <img src='https://assets.ajio.com/static/img/wishlistIcon.svg' alt=''  />
        </li>


    </ul>

    return (
        <>
        <nav className="Main-header">
            <div className='website-logo'>
                <img src='https://assets.ajio.com/static/img/Ajio-Logo.svg' alt=''></img>
            </div>
            <div className="upper-head">

                <ul>
                    <li><a href='# '>Sign in/Join Ajio</a></li>
                    <li><a href='# '>Customer Care</a></li>
                    <li className='btn-visit'>
                        <a href='# '>Visit Ajio</a>
                    </li>

                </ul>

            </div>
            <div className="lower-head">

                {low}

            </div>
         
        {data?<div className='sidebar'>
        <div className='hand_burger'onClick={()=>{setData(!data)}}>
                <img src='https://prestage.jioevents.com/assets/img/website/swap-me@2x.png' alt=''></img>
            </div>

            {low}
        </div>: <div className='hand_burger'onClick={()=>{setData(!data)}}>
                <img src='https://prestage.jioevents.com/assets/img/website/swap-me@2x.png' alt=''></img>
            </div>}
          

        </nav>
       
        </>

    )
}