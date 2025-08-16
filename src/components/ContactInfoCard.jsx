const ContactInfoCard = (props) => {
    return(
        <>

    
        <div className='contact-info-card'>
            <div className="contact-info-card-content">
              <div>
                   <div className="wrapper">

                   </div>
              
                  <div className="contact-info-logos">
                     <img src={props.icon}/>
                  </div>
              </div>
              <div className="texts">
                 <h1>{props.title}</h1>
                 <p>{props.lines}</p>
              </div>
            </div>
        </div>




    
        
        </>
    )
}  

export default ContactInfoCard
            
            
            