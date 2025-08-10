import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Login from './pages/Login';
import SignUp from './pages/SignUp';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path="about" element={<About/>}/>  
           {/* <Route path="shop" element={<Shop/>}/> */}
           
           <Route path="portfolio" element={<Portfolio/>}/>    
           <Route path="pricing" element={<Pricing/>}/>
           <Route path="contact" element={<Contact/>}/>   

           <Route path="login" element={<Login/>}/>
           <Route path="signup" element={<SignUp/>}/>
             
           {/* <Route path='*' element={<About/>}/> */}

         
         
          {/* <Route path='*' element={<Nopage/>}/> */}
     
        </Routes>
      </BrowserRouter>
    
    
    </>
    

  
  );
}

export default App;
