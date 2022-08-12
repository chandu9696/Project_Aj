
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

import Main_app from './components/Main_app';
import Productfilter from './components/Pages/ProductFilter';
import FileUploadInReact from './components/FileUploadInReact';
function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Main_app/>} />
     <Route path='/productinfo' element={<Productfilter/>}/>
     <Route path='/file' element={<FileUploadInReact/>}/>
  


   </Routes>
 </BrowserRouter>
  );
}

export default App;
