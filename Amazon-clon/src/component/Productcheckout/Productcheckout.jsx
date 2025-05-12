import React from 'react';
import '../../component/Productcheckout/productcheckotu.css';
import { useStateValue } from '../StateProvider/Stateprovider';

function Productcheckout({ descrption, price, rating, id, image }) {

const [{ basket },dispacth] = useStateValue();
  const removebasket=()=>{
    dispacth({
      type:'removebasket',
      id:id
    })

  }
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
        <button onClick={removebasket}  >Remove from basket</button>
      </div>
    </div>
  );
}

export default Productcheckout;