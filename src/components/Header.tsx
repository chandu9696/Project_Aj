import './Header.css'
export default function Header()
{
    return(
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
                    <li className='hand_burger'>
                        <img src='https://prestage.jioevents.com/assets/img/website/swap-me@2x.png'></img>
                    </li> 
                </ul>

            </div>
            <div className="lower-head">
                <ul>
                    <li>MEN</li>
                    <li>WOMEN</li>
                    <li>KIDS</li>
                    <li>INDIE</li>
                    <li>HOME AND KITCHEN</li>
                    <li className='search_box'>

                   
                    <input type='search' placeholder=' Search Item'></input>
                <img src='https://rc.jiomeet.jio.com/assets/img/chat-search-icon.svg'/>
                    </li>
                    <li className='fav_icon'>
                   <img src='https://assets.ajio.com/static/img/wishlistIcon.svg'/>
                    </li>
                    
                    
                </ul>
             
            </div>
        </nav>
    )
}