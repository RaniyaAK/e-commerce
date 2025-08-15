const ContactInfoCard = (props) => {
    return(
        <>

    <div className="contact-info-cards container">
        <div className='contact-info-card'>
            <div className="contact-info-card-content">
           
              
              <h1>{props.title}</h1>
              <p>{props.lines}</p>
            </div>
        </div>
    </div>



            {/* <section id="contact-info">
                <div className="contact-card">
                    <div className="contact-card-content">
                      <h3>{props.title}</h3>
                      <h4>{props.lines}</h4>
                    </div>
            

                </div>
            </section>
         */}
        
        </>
    )
}  

export default ContactInfoCard
            
            
            