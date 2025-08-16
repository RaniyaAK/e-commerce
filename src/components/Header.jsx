import { Link, useLocation } from "react-router-dom"
import '../styles/Header.css'
// import DropDown from "./DropDown"
import { useEffect, useState } from "react"

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


const Header = () =>{

    const handleLogout = () => {
        console.log('hello world')
        window.localStorage.clear()
    }

     const [isLogedIn, setIsLogedIn] = useState(false);
     const location = useLocation()


     useEffect(()=>{
        console.log(location.pathname)
        const token = window.localStorage.getItem('access-token')

        if (!token) {
            setIsLogedIn(false)
        }
        else{
            setIsLogedIn(true)
        }
     },[location.pathname])


    return(
        <>

 
<header>
    
    <div className="top-header">
        <div className="top-header-content container">

            <div className="call">
              {/* <img src="/images/call.svg"/> */}
              <p>+3098769071</p>
            </div>  
            <div className="para">        
              <p>TAKE CARE OF YOUR Health 25% OFF USE CODE “ DOFIX03"</p>
            </div>


            {/* <DropDown/> */}
                
            <div class="dropdown">
{/*                   
                    <select name="english" id="english">
                    
                            <option value="pages">English</option>
                
                            <option value="gallery">Spanish</option>
        
                            <option value="contact">Russian</option>
                        
                            <option value="errorpage">Portuguese</option>
                        
                    </select>
                    <select name="USD" id="USD">
                    
                            <option value="courses">USD</option>
    
                            <option value="faq">EUR</option>
        
                            <option value="faq">CHF</option>
                        
                    </select> */}
                    <select name="settings" id="settings">
                    
                            <option value="teachers">Settings</option>
                        
                            <option value="aboutus">My Profile</option>
                        
                            <option value="events">Wishlist</option>
                        
                            <option value="faq">Cart</option>
                            <option value="faq"><button onClick={handleLogout}></button>Logout</option>
                        
                        
                    </select> 
            </div>
            <div className="log-btn container">
                 {!isLogedIn && location.pathname !== '/login' && <Link to={'/Login'}><button className="login-btn">Login</button></Link>}
                 {isLogedIn &&  <Link to={'/Login'}><button onClick={handleLogout}className="login-btn">Logout</button></Link>}
            </div>
            
        </div> 

    </div>
    <div className="bottom-header">
        <div className="bottom-header-content container">
            <div className="addina container">
            
                <img src='/images/header-logo.svg'/>
            </div>
        
               <nav className="nav-items container">
                  <ul className="nav-items">
                    
                    <li><Link to={'/'}>HOME</Link></li>
                    <li><Link to={'/about'}>ABOUT</Link></li>   
                    <li><Link to={'/shop'}>SHOP</Link></li>
                    <li><Link to={'/contact'}>CONTACT</Link></li>
                   
              
                  </ul>
               </nav>
                                  
                <div class="search-box container">
                    <label>
                      <input type="text" className="search" placeholder="Search..."/>
                      <button class="search-icon"><i class="fa fa-search"></i></button>

                    </label>
                    
                </div> 
                
        </div>      

    </div>
   
</header>


     </>


  
    )
}


export default Header