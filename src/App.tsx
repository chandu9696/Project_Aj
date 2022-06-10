import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from './components/Header';
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
