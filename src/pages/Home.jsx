import { Link } from "react-router-dom"
import About from "./About"
import Contact from "./Contact"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HomeBanner from "../components/HomeBanner"
import FurnitureOff from "../components/FurnitureOff"
import TopSale from "../components/TopSale"
import DropDown from "../components/DropDown"
import Cart from "./Cart"


const Home = () => {

    return(
     <>    

     <Header/>

     <main>
    
     
    
      
      <HomeBanner/>


        <section id="three">
            <div className="cards container">
              <div className="card">
                <h1>Free Delivery</h1>
                <p>Free shipping on all order</p>
              </div>
              <div className="card">
                <h1>Money Return</h1>
                <p>Back guarantee under 7 day</p>
              </div>
              <div className="card">
                <h1>Online Support</h1>
                <p>Support online 24 hours a day</p>
              </div>
              <div className="card">
                <h1>Reliable</h1>
                <p>Trusted by 1000+ brands</p>
              </div>
            </div>
        </section> 


        <FurnitureOff/>
        <TopSale/>

     </main>

    <Footer/>

      

    </>

    )
}

export default Home


