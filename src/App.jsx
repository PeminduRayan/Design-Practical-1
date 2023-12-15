

import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from './Pages/Footer/News'
import Home from "./Pages/Base/Home";
import Header from "./assets/Header/Header.jsx";
import Footer from "./assets/Footer";
import CoInfo from "./Pages/Footer/CoInfo";

import Hilton from "./Pages/Hilton/Hilton.jsx";
import Offers from "./Pages/Offers/Offers.jsx";



export default function App() {
  return (

    <BrowserRouter>
    <Header/> 
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/News" element={<News/>}/>
    <Route path="/coInfo" element={<CoInfo/>}/>
   
    
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}
