import Footer from "../components/Footer"
import Header from "../components/Header"
import { product } from "../data/product"
import Productcard from "../components/Productcard"
import '../styles/ProductCard.css'
import { Link } from "react-router-dom"

const Shop = () => {
    return(
        <>

        <Header/>
        <section id="breadcrumps-thumb">

          <div class="breadcrumps-area container">
            
                <div class="bredcrumps-heading">
                  <h1>Product</h1>
                </div>
              
                <ul className="breadcrumps">
                  <li><Link to={'/'}>Home</Link></li>                   
                  <li>. Product</li>
                </ul>
              
          </div>
            
          
        </section>


        <section id='products'>
                <div className="product-cards container">

                  {
                    product.map((item)=> <Productcard key={item.id} image={item.image} name={item.name} discount={item.discount} oldPrice={item.oldPrice} newPrice={item.newPrice}/>)
                  }
                </div>

            {/* <div className="product-cards-row container">
                <div className="product-card">
                 {
                   product.slice(4).map((item)=> <Productcard key={item.id} name={item.name} discount={item.discount} oldPrice={item.oldPrice} newPrice={item.newPrice}image={item.image}/>)
            
                 }
                </div>
            </div> */}
        </section>
        <Footer/>
        </>
    )
}

export default Shop