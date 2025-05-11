import React from 'react'
import '../component/checkout.css'
import Subtotal from './Subtotl/Subtotal'
function Chekout() {
  return (
    <div className='checkout'>
     <div className="checkoutleft">
     <img
						className="checkout__ad"
						src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
						alt=""
					/>
{/* <hr /> */}
                    <h2 className='gratting'>hello user </h2>
                    <p className='shopingtitle'>your sopping basket product</p>
     </div>
     <div className="checkoutright">
        <Subtotal/>

     </div>
    </div>
  )
}

export default Chekout
