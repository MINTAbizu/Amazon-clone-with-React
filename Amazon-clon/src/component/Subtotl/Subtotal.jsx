import React from 'react'
import CurrencyFormat from 'react-currency-format';
import '../Subtotl/sbtotl.css'
function Subtotal() {
  return (
    <div className='subtotal'>
         <CurrencyFormat

        renderText={()=>{
            <div>
                 subtotoal(0 items): 
                 <strong>{0}</strong>
                 <div>
            <p>
               
            </p>
            
            <small className=''>
                <input type="checkbox" /><br />
                This order contains  a gift
                
            </small>
            </div>  
            </div>
        }}
        
        decimalscale={2}
        value={0}
        displatype={true}
        prefix={'$'}
        
        
        /> 
        <button>Prosedd to checkout</button>
      
    </div>
  )
}

export default Subtotal
