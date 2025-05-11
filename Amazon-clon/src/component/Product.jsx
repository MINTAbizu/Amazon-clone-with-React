import React from 'react'
import '../component/product.css'

function Product({image,price,descrption,rating,watch}) {
  return (
    <div className='product'>
      
      <div className="descrption">
        <p>{descrption}</p>
      </div>
      <div className="price">
       ${ price}
      </div>
      <div className="rating">
      {Array(rating)
            .fill()
            .map(()=>(
              <p>⭐</p>

            ))
            
            }
      </div>
      <div className="productimage ">
        <img className={`${watch}`} src={image} alt="" />
      </div>
      <div className="addtocartbtn">
        <button>Add-to-cart</button>
      </div>
    </div>
  )
}

export default Product
