import React from 'react'
import foot from '../images/footer.png'


export default function Footer() {
  return (
    <div className='footer'>
      <div>
        <h6>RELATED SERVICES</h6>
        <p>Electrician  |  Plumber  |  Carpenter  |  Packers & Movers  |  Salon For Woman  |  Salon For Man  |  Electronic Appliances  |  CCTV Installation & Repair  |  Ro- repair & service  |  house Painter  |  Pest Control  |  Kitchen Cleaning  |  Bathroom Cleaning  |  Sofa Cleaning  |  Carpet Cleaning  |  Home Deep Cleaning </p>
      </div>
      <div>
        <h6>TOP LOCATIONS</h6>
        <p>Delhi  |  Gurgaon  |  Noida  |  Ghaziabad  |  Faridhabad  |  Greater Noida</p>
      </div>
      <div>
        <img src={foot} alt="" />
      </div>
    </div>
  )
}
