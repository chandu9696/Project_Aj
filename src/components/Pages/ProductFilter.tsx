import { group } from "console";
import { createContext, useEffect, useState } from "react";
import Header from "../Layouts/Header";
import Product from "../Product";
import { Idata } from "../Products";
import './ProductFilter.css'
export const UserContext = createContext(3)
export default function Productfilter()
{
  
    const [toggle,settoggle]=useState<boolean>(true)
    const [toggle1,settoggle1]=useState<boolean>(true)
    const [toggle2,settoggle2]=useState<boolean>(true)
    const [toggle3,settoggle3]=useState<boolean>(true)
    const [toggle4,settoggle4]=useState<boolean>(true)
    const [sortValue,setSortValue]=useState<string>('Relevance')
    const [grid,setgrid]=useState<number>(3)
 
    const [checkboxValue,setCheckBox]=useState<string[]>([])
    const [productdata,SetProductData]=useState<Idata[]>([])
    useEffect(()=>{
   
        api()
      
    },[checkboxValue])
    async function api()
    {
         const response= await fetch('https://fakestoreapi.com/products')
         const data:Idata[]=await response.json()
         console.log(checkboxValue)

         if(checkboxValue.length!==0)
         {
        SetProductData(data.filter((item)=>checkboxValue.indexOf(item.category)!=-1))
        setSortValue('Relevance')
         }
         else
         SetProductData(data)
         console.log(data)
         console.log('called api')
    }
    useEffect(()=>{
        SortByPrice()
    },[sortValue])
    function SortByPrice()
    {
        console.log(sortValue)
        let clone=[...productdata]
        if(sortValue==='price')
        {
        clone=clone.sort((x,y)=>{return x.price-y.price})
        SetProductData(clone)
        }
        else if(sortValue==='rating')
        {
            clone=clone.sort((x,y)=>y.rating.rate-x.rating.rate)
        SetProductData(clone)
        }
        else
        {
            api()
        }
    }
    return(
        <>
        <Header/>
        <div className="productfilter_main">
            <div className="left_productfilter">
                <div className="main_left_productfilter">
                    <div className="header_filter">
                        <h3>Refine By</h3>
                        <div><button onClick={()=>{settoggle1(!toggle1)}}>^</button></div>
                    </div>

                 {toggle1 && <ul className="all_options">
                        <li>
                            <div className="toggle_option" onClick={()=>{settoggle(!toggle);}}>
                                <button>{!toggle?'+':'-'}</button>
                                <h4>Gender</h4>
                            </div>
                           {toggle && <div className="input_options">
                                <div>
                                 <input type="checkbox" id="T-shirt" name="T-shirt" value="T-Shirt"/>
                                <label htmlFor="T-shirt"> T-Shirt</label>
                                </div>
                                <div>
                                <input type="checkbox" id="T-shirt" name="T-shirt" value="T-Shirt"/>
                                <label htmlFor="T-shirt"> T-Shirt</label>
                                </div>
                                <div>
                                <input type="checkbox" id="T-shirt" name="T-shirt" value="T-Shirt"/>
                                <label htmlFor="T-shirt"> T-Shirt</label>
                                </div>

                            </div>   }  
                        </li>
                        <li>
                        <div className="toggle_option" onClick={()=>{settoggle2(!toggle2)}}>
                                <button>{!toggle2?'+':'-'}</button>
                                <h4>Category</h4>
                            </div>
                            {toggle2 && <div className="input_options">
                                <div>
                                 <input type="checkbox" id="Electronics" name="Electronics" value="electronics" onChange={(e)=>
                                 {
                                    if(e.target.checked)
                                    setCheckBox([...checkboxValue,e.target.value]);
                                    else
                                    setCheckBox(checkboxValue.filter((element)=>element!==e.target.value))
                               
                                }}/>
                                <label htmlFor="Electronics"> Electronics</label>
                                </div>
                                <div>
                                <input type="checkbox" id="Woman" name="Woman" value="women's clothing" onChange={(e)=>
                                 {
                                    if(e.target.checked)
                                    setCheckBox([...checkboxValue,e.target.value]);
                                    else
                                    setCheckBox(checkboxValue.filter((element)=>element!==e.target.value))
                               
                                }}/>
                                <label htmlFor="Woman"> Woman</label>
                                </div>
                                <div>
                                <input type="checkbox" id="men" name="men" value="men's clothing" onChange={(e)=>
                                 {
                                    if(e.target.checked)
                                    setCheckBox([...checkboxValue,e.target.value]);
                                    else
                                    setCheckBox(checkboxValue.filter((element)=>element!==e.target.value))
                               
                                }}/>
                                <label htmlFor="men"> Men</label>
                                </div>
                                <div>
                                <input type="checkbox" id="jewelery" name="jewelery" value="jewelery" onChange={(e)=>
                                 {
                                    if(e.target.checked)
                                    setCheckBox([...checkboxValue,e.target.value]);
                                    else
                                    setCheckBox(checkboxValue.filter((element)=>element!==e.target.value))
                               
                                }}/>
                                <label htmlFor="jewelery"> Jewelery</label>
                                </div>

                            </div>  }   
                        </li>
                        <li>
                        <div className="toggle_option" onClick={()=>{settoggle3(!toggle3)}}>
                        <button>{!toggle3?'+':'-'}</button>
                                <h4>Price</h4>
                            </div>
                          {toggle3 && <div className="input_options">
                                <div>
                                 <input type="checkbox" id="T-shirt" name="T-shirt" value="T-Shirt"/>
                                <label htmlFor="T-shirt"> T-Shirt</label>
                                </div>
                                <div>
                                <input type="checkbox" id="T-shirt" name="T-shirt" value="T-Shirt"/>
                                <label htmlFor="T-shirt"> T-Shirt</label>
                                </div>
                                <div>
                                <input type="checkbox" id="T-shirt" name="T-shirt" value="T-Shirt"/>
                                <label htmlFor="T-shirt"> T-Shirt</label>
                                </div>
                                <div>
                                <input type="checkbox" id="T-shirt" name="T-shirt" value="T-Shirt"/>
                                <label htmlFor="T-shirt"> T-Shirt</label>
                                </div>

                            </div>     }
                        </li>
                        <li>
                        <div className="toggle_option" onClick={()=>{settoggle4(!toggle4)}}>
                        <button>{!toggle4?'+':'-'}</button>
                                <h4>Brands</h4>
                            </div>
                         
                       {toggle4 &&     <div className="input_options">
                                <div>
                                 <input type="checkbox" id="T-shirt" name="T-shirt" value="T-Shirt"/>
                                <label htmlFor="T-shirt"> T-Shirt</label>
                                </div>
                                <div>
                                <input type="checkbox" id="T-shirt" name="T-shirt" value="T-Shirt"/>
                                <label htmlFor="T-shirt"> T-Shirt</label>
                                </div>
                                <div>
                                <input type="checkbox" id="T-shirt" name="T-shirt" value="T-Shirt"/>
                                <label htmlFor="T-shirt"> T-Shirt</label>
                                </div>
                                <div>
                                <input type="checkbox" id="T-shirt" name="T-shirt" value="T-Shirt"/>
                                <label htmlFor="T-shirt"> T-Shirt</label>
                                </div>

                            </div>    } 
                        </li>
                    </ul>}

                </div>
           
            </div>
            <div className="right_productfilter">
                <div className="top_info">
        
                       <div> <label>Woman</label></div>
                       <div><h1>Dress</h1></div> 
                      <div className="description_product">  <p>Lsicing nit consequatur soluta autem pariatur! Nihil tenetur omnis fugit molestiae.Nihil tenetur omnis fugit molestiaeNihil tenetur omnis fugit molestiae</p></div>
              
                </div>
                <div className="info_bar">
                    <div className="main_bar">
                        <div><h6>{productdata.length} Items Found</h6></div>
                        <div className="grid_info">
                            <div>GRID</div>
                            <div onClick={()=>setgrid(3)} className='three_grid'></div>
                            <div  onClick={()=>setgrid(5)} className='five_grid'></div>
                        </div>
                        <div className='preference_selector'>
                            <div>Sort By</div>
                            <select value={sortValue} onChange={(e)=>setSortValue(e.target.value)}>
                                <option value='relevance'>Relevance</option>
                                <option value='price'>Price</option>
                                <option value="rating">Rating</option>
                            </select>
                        </div>

                       
                    </div>


                {  <div className={grid===3?'main_product3':'main_product5'}>
                             {productdata.map((item,index)=>{
                            return(<UserContext.Provider value={grid}>
                                <Product {...item} key={index}></Product>
                                </UserContext.Provider>)
                              })}
                     </div>
                     
                     }
                </div>
            </div>



        </div>
        </>
    )
}