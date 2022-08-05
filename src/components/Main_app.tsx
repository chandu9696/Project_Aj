import Coursal from "./Corosual";
import Header from "./Layouts/Header";
import Products from "./Products";

export default function Main_app()
{

    // const images=
    // {
    //     image:['https://assets.ajio.com/cms/AJIO/WEB/03082022-D-UHP-men-p1-premiumbrands-3070.jpg','https://assets.ajio.com/cms/AJIO/WEB/03082022-D-UHP-men-p4-shoes-3060.jpg',
    //      'https://assets.ajio.com/cms/AJIO/WEB/03082022-D-UHP-men-p5-min40.jpg']
    // }
  const images=  [
     'https://assets.ajio.com/cms/AJIO/WEB/03082022-D-UHP-men-p1-premiumbrands-3070.jpg',
       
       'https://assets.ajio.com/cms/AJIO/WEB/03082022-D-UHP-men-p4-shoes-3060.jpg',
       
       'https://assets.ajio.com/cms/AJIO/WEB/03082022-D-UHP-men-p5-min40.jpg'
     
    ]
    const images1=  [
        'https://assets.ajio.com/cms/AJIO/WEB/05082022-d-unisex-topbannercarousal-p2-fashionation-flat75.jpg',
          
          'https://assets.ajio.com/cms/AJIO/WEB/05082022-d-unisex-topbannercarousal-p1-fashionation-flat50extra25.jpg',
          
          'https://assets.ajio.com/cms/AJIO/WEB/Prebuzz-sdfUHP-D-banner-1440x470.jpg'
        
       ]
    const value={
        name:'main_product'
    }
    return(
        <div className="main_main">
        <Header></Header>
        <Coursal image={[...images]}></Coursal>
        <br></br>
        <Coursal image={[...images1]}></Coursal>
        {/* <Coursal></Coursal>
        <Coursal></Coursal> */}
        <Products {...value}></Products>
        <Products name='main_product1'></Products>
       
        </div>
    )
}