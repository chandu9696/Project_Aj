
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

import Main_app from './components/Main_app';
import Productfilter from './components/Pages/ProductFilter';
import FileUploadInReact from './components/FileUploadInReact';
import Apitest from './components/ApiTest';
import UseApi from './components/UseApi';
import SignUp from './components/Layouts/Signup';
import ProductDetails from './components/Pages/ProductDetails';
function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Main_app/>} />
     <Route path='/productinfo' element={<Productfilter/>}/>
     <Route path='/file' element={<FileUploadInReact/>}/>
     <Route path='/signup' element={<SignUp/>}/>
     <Route path='/api' element={<Apitest/>}/>
     <Route path='/use' element={<UseApi/>}/>
     <Route path='/product/:product_id' element={<ProductDetails/>}/>
  


   </Routes>
 </BrowserRouter>
  );
}

export default App;
