import { Link } from "react-router-dom"
import '../styles/Footer.css'


const Footer = () => {
    return(
      <>  

 
     <footer>
     
        <div class="footer-top container">
            <div className="footer-top-content">
                <div>
                    <div className="addina-footer-logo">
                        <img src="/images/footer-logo.svg"/>
                    </div>
                    <p>It helps designers plan out where the content will sit, the content to be written and approved.</p>
                    <div className="logos">
                        <i class="fa-brands fa-facebook"></i>
                        <img src=""/>

                    </div>

                </div>
                <div className="services">
                    <h1>Services</h1>
                    <ul>
                      <li>Log In</li>
                      <li>Wishlist</li>
                      <li>Return Policy</li>
                      <li>Privacy policy</li>
                      <li>Shopping FAQs</li>
                    </ul>

                </div>
                <div className="company">
                    <h1>Company</h1>
                    <ul>
                      <li>Home</li>
                      <li>About us</li>
                      <li>Pages</li>
                      <li>Blog</li>
                      <li>Contact us</li>
                    </ul>
                    

                </div>
                <div className="contact">
                    <h1>Contact</h1>
                    <p>4517 Washington Ave. Manchester, Kentucky 39495</p>

                    <div className="location-wrapper">
                    </div>
                    <div className="location">
                           <img src="/images/location.svg"/>
                       
                       <p>711-2880 Nulla St.</p>
                    </div>

                   
                      <div className="call-wrapper">
                      </div>
                      
                      <div className="call">
                     
                         <img src="/images/footer-call.svg"/>
                         {/* <p>897654322</p> */}
                         <p>+964 563 79 203</p>
                      </div>
                

                </div>
          

            </div>
            <hr className="footer-top-break"/>

            
        </div>
        <div className="footer-bottom container">
            <div className="footer-bottom-content">
              <div className="copyright">
                 <p>© All Copyright 2024 by Addina</p>
              </div>
              <div className="payment-images">
                 <img src="/images/payoneer.png"/>
                 <img src="/images/master.png"/>
                 <img src="/images/paypal.png"/>
              </div>
              <div className="terms-privacy">
                 <p>Terms & Conditions</p> 
                 <hr className="footer-bottom-break" />
                 
                 <p>Privacy Policy</p>
              </div>

            </div>
            
        </div>
        
 

     </footer>

    </>

            
    )
}

export default Footer

