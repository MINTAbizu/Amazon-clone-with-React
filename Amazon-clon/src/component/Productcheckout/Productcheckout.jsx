import React from 'react';
import '../../component/Productcheckout/productcheckotu.css';

function Productcheckout({ descrption, price, rating, id, image }) {
  return (
    <div className='productcheckout'>
      <div className="productdescription1">
        <p>{descrption}</p>
      </div>
      <div className="productprice1">
        ${price}
      </div>
      <div className="productrating1">
        {Array(rating)
          .fill()
          .map((_, index) => (
            <span key={index}>⭐</span>
          ))}
      </div>
      <div className="productimage1">
        <img src={image} alt="" />
      </div>
      <div className="addtocartbtn1">
        <button>Remove from basket</button>
      </div>
    </div>
  );
}

export default Productcheckout;