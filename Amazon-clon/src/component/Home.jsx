import React from 'react'
import home from "../../src/component/image/image/kitchen.jpg"
import Product from './Product'
import '../component/home.css'

import image1 from '../component/image/image/kitchen.jpg'
import image2 from '../component/image/image/beauty.jpg'
import image3 from '../component/image/image/gaming.jpg'
import image4 from '../component/image/image/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_ (1).jpg'
import image5 from '../component/image/image/Shop.jpg'
import image6 from '../component/image/image/Toys.jpg'
import image7 from '../component/image/image/Shop.jpg'




function Home() {
  return (
    <div className='home'>
    <div className="homeimage">
        <img src={home} alt="" />
    </div>

    <div className="productrow">
        <Product image={image1} price={123.00} descrption={"the right choose this product"} rating={4}/>
        {/* <Product image={image2} price={123.00} descrption={"the right choose this product"} rating={4}/> */}
        <Product image={image4} price={123.00} descrption={"the right choose this product"} rating={4}/> 
        
        

    </div>
    <div className="productrow">
    {/* <Product image="https://m.media-amazon.com/images/I/61aoVkMoAwL._SL1263_.jpg" rating={5}/>
    <Product image="https://m.media-amazon.com/images/I/61aoVkMoAwL._SL1263_.jpg"/>
    <Product image="https://m.media-amazon.com/images/I/61aoVkMoAwL._SL1263_.jpg"/>
    <Product image="https://m.media-amazon.com/images/I/61aoVkMoAwL._SL1263_.jpg"/>
    <Product image="https://m.media-amazon.com/images/I/61aoVkMoAwL._SL1263_.jpg"/> */}
    {/* <Product id="3254355"
         descrption="Plug in Wall Sconce Set of 2, Indoor Bedside Wall Lamp Light "
         price={36.9}
         rating={4}
         image="https://m.media-amazon.com/images/I/412II1XVo2S._AC_SL1000_.jpg"
         /> */}
        

    </div>
    <div className="productrow">
    <Product
          id="12321341"
          descrption="INSIGNIA All-New 50-inch Class F30 Series LED 4K UHD Smart Fire TV (NS-50F301NA24, 2023 Model)"
          price={199.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81DM+ZzL8rL._AC_SL1500_.jpg"
         //  image="https://m.media-amazon.com/images/I/81QEJYyspjL._AC_SL1500_.jpg"
        
         />
           <Product
          id="12321341"
          descrption="INSIGNIA All-New 50-inch Class F30 Series LED 4K UHD Smart Fire TV (NS-50F301NA24, 2023 Model)"
          price={199.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81DM+ZzL8rL._AC_SL1500_.jpg"
         //  image="https://m.media-amazon.com/images/I/81QEJYyspjL._AC_SL1500_.jpg"
        
         />
        
         <Product
          id="12321341"
          descrption="INSIGNIA All-New 50-inch Class F30 Series LED 4K UHD Smart Fire TV (NS-50F301NA24, 2023 Model)"
          price={199.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81DM+ZzL8rL._AC_SL1500_.jpg"
         //  image="https://m.media-amazon.com/images/I/81QEJYyspjL._AC_SL1500_.jpg"
        
         />
        

    </div>
    <div className="productrow">
    <Product id="3254355"
         descrption="Plug in Wall Sconce Set of 2, Indoor Bedside Wall Lamp Light "
         price={36.9}
         rating={4}
         image="https://m.media-amazon.com/images/I/412II1XVo2S._AC_SL1000_.jpg"
         />
    <Product id="3254355"
         descrption="Plug in Wall Sconce Set of 2, Indoor Bedside Wall Lamp Light "
         price={36.9}
         rating={4}
         image="https://m.media-amazon.com/images/I/412II1XVo2S._AC_SL1000_.jpg"
         />
    <Product id="3254355"
         descrption="Plug in Wall Sconce Set of 2, Indoor Bedside Wall Lamp Light "
         price={36.9}
         rating={4}
         image="https://m.media-amazon.com/images/I/412II1XVo2S._AC_SL1000_.jpg"
         />
    <Product id="3254355"
         descrption="Plug in Wall Sconce Set of 2, Indoor Bedside Wall Lamp Light "
         price={36.9}
         rating={4}
         image="https://m.media-amazon.com/images/I/412II1XVo2S._AC_SL1000_.jpg"
         />
        

    </div>

   
    

      
    </div>
  )
}

export default Home
