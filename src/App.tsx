
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

import Main_app from './components/Main_app';
function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Main_app/>} />
  


   </Routes>
 </BrowserRouter>
  );
}

export default App;
