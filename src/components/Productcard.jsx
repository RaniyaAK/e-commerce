
const productcard = (props) => {


    return (
        <div className='product-card'>
            <div className="product-card-content">
           
              <h3>{props.discount}</h3>
              <img src={props.image}/>
                <hr className="image-bottom-hr"/>
              <h1>{props.name}</h1>
              <div className="prices">
                <del>${props.oldPrice}</del>
                <h4> ${props.newPrice}</h4>
              </div>
            </div>
        </div>
    )


}


export default productcard
