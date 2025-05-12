import React from 'react'
import '../component/header.css'
// import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider/Stateprovider'
function Header() {
  const [{basket},dispacth]=useStateValue()
  return (
    <div className='header'>
        <div className='logo'>
       <Link to={'/'}>

       <img
								className="header__logo  m-0 mt-4"
								src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
								alt="Amazone logo"
							/>
       
       </Link>
            
        

        </div>
        <div className="searchinput">
            <input type="text" />
            {/* <SearchIcon/> */}

        </div>
        <div className="headernav">
           <div className="headeroption">
            <span className='optionone'>Hello Gust</span>
            <span className='optiontwo'>Signin</span>
           </div>
           <div className="headeroption">
            <span className='optionone'>Return</span>
            <span className='optiontwo'>&Orders</span>
           </div>
           <div className="headeroption">
            <span className='optionone'>Your</span>
            <span className='optiontwo'>Prime</span>
           </div>
        </div>
        
        <div className="rightside">
            <div className="order">
                {/* <img src="" alt="order" /> */}
            </div>
           <Link to={"/checkout"}>

           <div className="cart">
            
                {/* <img src="" alt="" /> */}
               <p> {basket.length}</p>
            </div>
           
           </Link>
        </div>
      
    </div>
  )
}

export default Header
