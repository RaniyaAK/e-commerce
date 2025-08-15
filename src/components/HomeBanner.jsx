import '../styles/HomeBanner.css'


const HomeBanner = () => {
    return(
        <>
        

        <section id="home-banner">
            <div className="home-banner container">

                <div className="home-banner-title">
                   <div className="new-arrival container">
                     <button className='new-arrival-button'>NEW ARRIVAL...</button>
                   </div>
                   <div className="elevate container">
                     <h1>Elevate Your Home Aesthestics</h1>
                     <p>A furniture e-commerce company operates in the digital space, offering a wide range of furniture products for sale through an online platform.</p>
                   </div>
                   <div className="home-banner-buttons">
                    <button className="buy-now">BUY NOW</button>
                    <button className="view-details">VIEW DETAILS</button>
                   </div>
                </div>
                   
            
                <div className="home-banner-image container">
                    <div className='brown-circle'>

                    </div>
                    <div className="chair-image container">
                      <img src="/images/chair.png"/>
                        

                    </div>


                </div>
            </div>
        </section>


         
        </>

    )
}


export default HomeBanner