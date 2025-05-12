import React from 'react';
import '../component/checkout.css';
import Subtotal from './Subtotl/Subtotal';
import Productcheckout from './Productcheckout/Productcheckout';
import { useStateValue } from './StateProvider/Stateprovider';

function Chekout() {
  const [{ basket }] = useStateValue();

  return (
    <div className='checkout'>
      <div className="checkoutleft">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <h2 className='greeting'>Hello User</h2>
        <p className='shoppingtitle'>Your shopping basket products</p>
        {basket.map((item, i) => (
          <Productcheckout
            key={i}
            id={item.id}
            descrption={item.descrption} // Corrected spelling
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkoutright">
        <Subtotal />
      </div>
    </div>
  );
}

export default Chekout;