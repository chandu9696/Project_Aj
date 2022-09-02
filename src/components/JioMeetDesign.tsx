
import './JioMeetDesign.css'
export default function JioMeetH()
{
    return(
        <>
        <nav>
       
        <div className='main_head'>
        <div className="upper_header">
            <div className='Wp_wrap'>
                <img src='https://prestage.jiomeet.com/assets/img/website/whatsapp.svg'></img>
                <div>+91 9960 2905 37</div>
            </div>
            <div>Download app</div>
            <div>Help</div>
            <div>Sign in</div>
            <div className='lang_change'>
                <img src='https://prestage.jiomeet.com/assets/img/glob-lang-dark.svg'/>
                <span>English </span>
            </div>

        </div>
        </div>
       
        <div className='main_head_s'>
            <div className='lower_header'>
                <div className='logo'>
                    <img src='https://prestage.jiomeet.com/assets/img/website/website_logo_header.svg'/>
                </div>
                <div className='btn_hand'>
             
                    <button></button>
                </div>
                <div className='options'>
                    <div>Products</div>
                    <div>UseCase</div>
                    <div>Price</div>
                    <div>More</div>
                </div>
                <div className='user_options'>
                    <div>Join Meeting</div>
                    <button>Sign Up</button>
                </div>
            </div>

        </div>
   
        </nav>
        <section className='section_main'>
            <div className='main_section'>
                <div className='left_section'>
                    <div className='left_sec_h'>Simple, Secure, Free</div>
                    <div className='india_text'>India’s very own video conferencing app,<br></br> made for everyone!</div>
                    <div className='meeting_option'>
                        <div className='plan'>
                            <div className='img_plan'>
                                <img src='https://jiomeetpro.jio.com/assets/img/start_a_meeting.svg'/>
                            </div>
                            <div className='text' >
                                Start a Meeting
                            </div>
                        </div>
                        <div className='plan'>
                            <div className='img_plan'>
                                <img src='https://jiomeetpro.jio.com/assets/img/join_meeting.svg'/>
                            </div>
                            <div className='text' >
                               Join a Meeting
                            </div>
                        </div>
                        <div className='plan1'>
                            <div className='img_plan'>
                                <img src='https://jiomeetpro.jio.com/assets/img/plan_a_meeting.svg'/>
                            </div>
                            <div className='text' >
                                Plan a Meeting
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='right_section'>
                    <img src='https://jiomeetpro.jio.com/assets/img/website/hero_animation_loggedin.svg'/>
                </div>


            </div>
        </section>
        </>
    )
}