import { Link } from "react-router-dom"
import '../styles/Header.css'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


const Header = () =>{
    return(
        <>
 
<header>
    <div className="top-header">
        <div className="top-header-content container">

            <div className="call">
             <img src="/images/call.svg"/>
             <p>+3098769071</p>
            </div>  
            <div className="para">        
              <p>TAKE CARE OF YOUR Health 25% OFF USE CODE “ DOFIX03"</p>
            </div>
                
                <div class="dropdown">
                    <select name="pages" id="pages">
                        <a href="#">
                            <option value="pages">ENGLISH</option>
                        </a>
                       
                       

                        <a href="#">
                            <option value="gallery">Spanish</option>
                        </a>
                        <a href="#">
                            <option value="contact">Russian</option>
                        </a>
                        <a href="#">
                            <option value="errorpage">Portuguese</option>
                        </a>
                    </select>
                    <select name="Courses" id="courses">
                        <a href="#">
                            <option value="courses">USD</option>
                        </a>
                        <a href="#">
                            <option value="faq">Course</option>
                        </a>
                    </select>
                    <select name="teachers" id="teachers">
                        <a href="#">
                            <option value="teachers">SETTING</option>
                        </a>
                        <a href="#">
                            <option value="aboutus">Teachers One</option>
                        </a>
                        <a href="#">
                            <option value="events">Teachers Two</option>
                        </a>
                        <a href="#">
                            <option value="faq">Teacher Single</option>
                        </a>
                    </select>
            </div>

        </div> 

    </div>
    <div className="bottom-header">
        <div className="addina">
            <h1>ADDINA</h1>
            <img src='/images/header-log.svg'/>
        </div>
        
               <nav className="nav-items container">
                  <ul className="nav-items">
                    
                    <li><Link to={'/'}>HOME</Link></li>
                    <li><Link to={'/about'}>ABOUT</Link></li>   
                    <li><Link to={'/shop'}>SHOP</Link></li>
                    <li><Link to={'/contact'}>CONTACT</Link></li>
                   
                    {/* <li><Link to={'/portfolio'}></Link></li> */}                   
                    {/* <li><Link to={'/pricing'}>PRICING</Link></li> */}
              
                  </ul>
               </nav>
                                  
                <div class="search-box container">
                    <label>
                      <input type="text" className="search" placeholder="Search..."/>
                      <button class="search-icon"><i class="fa fa-search"></i></button>
                    </label>
                </div> 

    </div>

        {/* <div className="joy">
            
        </div>


               <div className="home-heading container">
                  <h1>This is an awesome company for creatives.</h1>
                  <p>We are a design agency that makes beautiful things. We pride ourselves in creating beautiful solutions and meeting challenges.</p>
                   <button className="readmore-home"> Read More</button>
               </div> */}
           
     </header>
     <main>
        <section id="home-banner">
            <div className="home-banner">
               <div className="new-arrival container">
                 <button className='new-arrival-button'>NEW ARRIVAL...</button>
               </div>
            </div>
        </section>

     </main>
     

     </>


  
    )
}


export default Header