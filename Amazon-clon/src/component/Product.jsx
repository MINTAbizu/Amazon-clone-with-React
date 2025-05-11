import React from 'react'
import '../component/product.css'

function Product() {
  return (
    <div className='product'>
      
      <div className="descrption">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.br <br />Officiis, iure, <br />iste adipisci voluptates ipsa ratione aut et magnam magni vero ipsam quod dolores molestiae. <br />Numquam sit laborum aspernatur autem nobis.</p>
      </div>
      <div className="price">
        price
      </div>
      <div className="rating">
        rating
      </div>
      <div className="productimage">
        <img src="" alt="" />
      </div>
      <div className="addtocartbtn">
        <button>Add-to-cart</button>
      </div>
    </div>
  )
}

export default Product
