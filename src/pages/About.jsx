
import { Link } from "react-router-dom"
import '../styles/About.css'
import Header from "../components/Header"
import Footer from "../components/Footer"



const About = () => {
    return(
        <>
        
        <Header/>

                <section id="breadcrumps-thumb">

                   <div class="breadcrumps-area container">
            
                      <div class="bredcrumps-heading">
                         <h1>About us</h1>
                      </div>
              
                      <ul className="breadcrumps">
                         <li><Link to={'/'}>Home</Link></li>                   
                         <li>. About</li>
                      </ul>
              
                  </div>
            
                </section>

        
         <section id="about">
          <div className="about container">
            
            <div className="about-left">
                <h2>WE DESIGN FURNITURE</h2>
                <h1>Our Core Divisions</h1>
                <p>Ut leo. Vivamus aliquet elit ac nisl. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac enim. Sed cursus turpis vitae tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id.</p>
          
                <div className="progress-bar-furniture">
                  <p>furniture <span>70%</span></p>
                  <div className="bar"></div>
                </div> 
                <div className="progress-bar-handmade">
                  <p>Handmade <span>52%</span></p>
                  <div className="bar"></div>
                </div>
                <div className="progress-bar-crafts">
                  <p>Crafts <span>80%</span></p>
                  <div className="bar"></div>
                </div>
                <img src="/images/about-image-1.jpg"/>
            </div>
                
            
            <div className="about-right">
                <img src="/images/about-image-2.jpg"/>
            </div>
         </div>

        </section>

    
        
        
        <Footer/>
        
        
        </>
    )
}
export default About