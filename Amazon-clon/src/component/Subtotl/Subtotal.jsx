import React from 'react';
import CurrencyFormat from 'react-currency-format';
import '../Subtotl/sbtotl.css';
import { useStateValue } from '../StateProvider/Stateprovider';

function Subtotal() {
  const [{ basket }] = useStateValue();

  // Calculate the subtotal (you can replace 0 with the actual calculation)
  const getBasketTotal = (basket) => {
    return basket.reduce((amount, item) => item.price + amount, 0);
  };

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <div>
            Subtotal ({basket.length} items): 
            <strong>{value}</strong>
            <div>
              <p></p>
              <small>
                <input type="checkbox" />
                <br />
                This order contains a gift
              </small>
            </div>  
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Use the calculated subtotal here
        displayType={'text'}
        prefix={'$'}
      /> 
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;