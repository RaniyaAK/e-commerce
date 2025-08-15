import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProtectRoutes from './hooks/ProtectRoutes';
import Shop from './pages/Shop';
import DropDown from './components/DropDown';
import Cart from './pages/Cart';



function App() {
  return (
    <>
      <BrowserRouter>
      <ProtectRoutes/>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path="about" element={<About/>}/>  
           <Route path="shop" element={<Shop/>}/>
           <Route path="dropdown" element={<DropDown/>}/>
           {/* <Route path="cart" element={<Cart/>}/> */}

           
             
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
