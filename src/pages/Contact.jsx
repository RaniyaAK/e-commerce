import ContactInfoCard from "../components/ContactInfoCard"
import Footer from "../components/Footer"
import Header from "../components/Header"
import MapForm from "../components/MapForm"
import { ContactInfo } from "../data/ContactInfo"
import '../styles/ContactInfoCard.css'



const Contact = () => {
    return(
        <>


        <Header/>

            <section id="breadcrumps-thumb">

               <div class="breadcrumps-area container">
                  <div class="bredcrumps-heading">
                     <h1>Contact</h1>
                  </div>
                  <ul class="breadcrumps">
                     <li>Home</li>                   
                     <li>. Contact</li>
                  </ul>
               </div>
            </section>

            {/* <section id="contact-info">
                <div className="contact-info-cards container"> */}
                    {
                        ContactInfo.map((item)=> <ContactInfoCard title={item.title} lines={item.lines}/>)
                    }
{/* 
                </div>
            </section> */}

            <MapForm/>



            {/* <div className="contact-map container">
                <div className="contact">
                    
                    <h1>Contact Us</h1>
                    <h5>Address:</h5>
                    <p>156E Mazuki Str, East Tokyo, JN 468, JP</p>
                    <h5>Phone:</h5>
                    <p>001-1234-5678</p>
                    <h5>Email:</h5>
                    <p>exmple@exmple.com</p>

                </div>
                <div className="map">

                </div>


            </div> */}

        

          <Footer/>

        </>
    )
}

export default Contact


 