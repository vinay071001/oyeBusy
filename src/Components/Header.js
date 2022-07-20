import React from 'react'
import logo from '../images/logo.svg'
import cart from '../images/shopping_cart.svg'
import playstore from '../images/playstore.png'

export default function Header() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <div className="address">
        <p className='addressPara'>1st Floor, H 356, Block B, Sector 22, Noida, Uttar Pradesh 201301</p>
      </div>
      <div>
        <ul className="lists">
          <li className='listitems'>Blog</li>
          <li className='listitems'>Career</li>
          <li className='listitems'>My Account</li>
        </ul>
      </div>
      <div>
        <img src={cart} alt="" className='icons'/>
        <img src={playstore} alt="" className='icons' />
      </div>
    </div>
  )
}
