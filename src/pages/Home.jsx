import { Link } from "react-router-dom"
import Services from "./Services"
import About from "./About"
import Pricing from "./Pricing"
import Contact from "./Contact"
import Portfolio from "./Portfolio"
import Footer from "../components/Footer"
import Header from "../components/Header"


const Home = () => {

    return(
     <>    

     <Header/>

     <main>

        <Services/>

        <About/>

        <Pricing/>

        <Contact/>

        <Portfolio/>

     </main>

    <Footer/>

       {/* <input type="email" placeholder="Enter your e-mail here" class="form-control"> */}

    </>

    )
}

export default Home


