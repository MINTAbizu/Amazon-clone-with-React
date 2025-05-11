import React from 'react'
import home from "../../src/component/image/image/kitchen.jpg"
import Product from './Product'
import '../component/home.css'

function Home() {
  return (
    <div className='home'>
    <div className="homeimage">
        <img src={home} alt="" />
    </div>

    <div className="productrow">
        <Product/>
        <Product/>
        <Product/>
        
        

    </div>
    <div className="productrow">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        

    </div>
    <div className="productrow">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        

    </div>
    <div className="productrow">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        

    </div>

      
    </div>
  )
}

export default Home
