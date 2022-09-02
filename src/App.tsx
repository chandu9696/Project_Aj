
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
import { Provider } from "react-redux";
import store from './store';
import UsenRedux from './components/UseNRedux';
import JioMeetH from './components/JioMeetDesign';
function App() {
  return (
    <Provider store={store}>
 
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Main_app/>} />
     <Route path='/productinfo' element={<Productfilter/>}/>
     <Route path='/file' element={<FileUploadInReact/>}/>
     <Route path='/signup' element={<SignUp/>}/>
     <Route path='/api' element={<Apitest/>}/>
     <Route path='/use' element={<UseApi/>}/>
     <Route path='/product/:product_id' element={<ProductDetails/>}/>
     <Route path='/redux' element={<UsenRedux/>}/>
     <Route path='/jiomeeth' element={<JioMeetH/>}/>
  


   </Routes>
 </BrowserRouter>
 </Provider>
  );
}

export default App;
