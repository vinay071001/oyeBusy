import React from 'react'

import salon from '../images/salon.png'
import electrician from '../images/electrician.png'
import plumber from '../images/plumber.png'
import cctv from '../images/cctv.png'
import ac from '../images/ac.png'
import packers from '../images/packers.png'
import clean from '../images/clean.png'
import paint from '../images/paint.png'
import home from '../images/home.png'
import disinfet from '../images/disinfect.png'
import pest from '../images/pest.png'
import carpenter from '../images/carpenter.png'

import one from '../images/5.png'
import two from '../images/1.png'
// import three from '../images/2.png'

import windowAc from '../images/windowAc.png'
import splitAc from '../images/splitAc.png'
import sofa from '../images/sofa.png'
import house from '../images/house.png'

import carpentary from '../images/Carpenter-PNG-Image.png'
import plumbing from '../images/kisspng-dick-rosher-plumbing-inc-plumber-drain-leak-plumber-5abfda3c8ab124 1.png'
import electrical from '../images/kisspng-technician-plumber-electrician-home-repair-mainten-5ae1b847d030b7 1.png'
import painting from '../images/pngegg.png'
import pesting from '../images/kisspng-insecticide-pesticide-herbicide-sprayer-5d0e1b4badf171.png'

import safe from '../images/delivery-man-red-uniform-medical-mask-gloves-pointing-fingers-away-looking-confident 1.png';

import assured from "../images/assured.png";

import washing from '../images/washing.png'
import fridge from '../images/fridge.png'
import microwave from '../images/microwave.png'
import ro from '../images/ro.png'
import tv from '../images/tv.png'
import splitAc2 from '../images/splitAc2.png'

import mcb from '../images/mcb.png'
import switches from '../images/switches.png'
import wiring from '../images/wiring.png'
import appliance from '../images/appliance.png'
import chandelier from '../images/chandelier.png'
import doorBell from '../images/doorBell.png'


import bookService from '../images/bookService.png'

import Basin from '../images/Basin.png'
import Bath from '../images/Bath.png'
import Blockage from '../images/Blockage.png'
import Drill from '../images/Drill.png'
import Minor from '../images/Minor.png'
import Tap from '../images/Tap.png'
import Bed from '../images/Bed.png'
import Curtain from '../images/Curtain.png'
import Door from '../images/Door.png'
import Drawer from '../images/Drawer.png'
import Fitting from '../images/Fitting.png'
import Furniture from '../images/Furniture.png'

import benefits from '../images/benefits.png'

import Refer from '../images/Refer.png'
import Stamp from '../images/Stamp.png'

import Service from "./Service";

import Service2 from "./Service2";

import Service3 from "./Service3";

import Service4 from "./Service4";

import Reviews from "./Reviews";


export default function body() {
  return (
    <div>
      <div className='startdiv'>
        <div className='div1'>
          <h3>Home services, on demand</h3>
          <input type="text" placeholder="Search for a service"></input>
          <p>Examples: Salon, Women's hair, Men's grooming & Many more..</p>
        </div>
        <div className="div2">
          <h3>What are you looking for?</h3>
          <div className='div2a'>
            <div>
              <img src={salon} alt="" />
              <p>Salon at Home</p>
            </div>
            <div>
              <img src={electrician} alt="" />
              <p>Electrician</p>
            </div>
            <div>
              <img src={plumber} alt="" />
              <p>Plumber</p>
            </div>
            <div>
              <img src={cctv} alt="" />
              <p>CCTV</p>
            </div>
            <div>
              <img src={ac} alt="" />
              <p>AC Service</p>
            </div>
            <div>
              <img src={packers} alt="" />
              <p>Packers & Movers</p>
            </div>
            <div>
              <img src={clean} alt="" />
              <p>Cleaning</p>
            </div>
            <div>
              <img src={paint} alt="" />
              <p>House Painting</p>
            </div>
            <div>
              <img src={home} alt="" />
              <p>Home Appliances</p>
            </div>
            <div>
              <img src={disinfet} alt="" />
              <p>Disinfection</p>
            </div>
            <div>
              <img src={pest} alt="" />
              <p>Pest Control</p>
            </div>
            <div>
              <img src={carpenter} alt="" />
              <p>Carpenter</p>
            </div>
          </div>
          <div className='div2b'>
            <img src={one} alt="" />
            <img src={two} alt="" />
            {/* <img src={three} alt="" /> */}
          </div>
        </div>
      </div>
      <div className='trendingService'>
        <h1>Trending Services</h1>
        <p>Premium Home Services</p>
        <Service image1={windowAc} image2={splitAc} image3={sofa} image4={house} image5={windowAc} title1={"Air-Conditioner Services"} title2={"AC Installation"} title3={"Sofa Cleaning Service"} title4={"Home Deep Cleaning Service"} title5={"Air-Conditioner Services"} />
      </div>
      <div className='trendingService'>
        <h1>Same Day Services</h1>
        <p>Premium Home Services</p>
        <Service image1={carpentary} image2={plumbing} image3={electrical} image4={painting} image5={pesting} title1={"Carpentery Services"} title2={"Plumbing Services"} title3={"Electrical Services"} title4={"Painting Services"} title5={"Pest Control Serviecs"} />
      </div>
      <div className='safeService'>
        <div>
          <h1>100% Safe Services</h1>
          <ul>
            <li>Masks</li>
            <li>Temperature Checks</li>
            <li>Gloves</li>
            <li>Sanitized Tools</li>
          </ul>
        </div>
        <img src={safe} alt="" />
      </div>
      <div className='trendingService'>
        <h1>Professional Cleaning Services</h1>
        <p>Premium Home Services</p>
        <Service2 />
      </div>
      <div className='trendingService'>
        <h1>Most Used Services</h1>
        <p>Premium Home Services</p>
        <Service2 />
      </div>
      <div className='assuredClass'>
        <img src={assured} alt="" />
      </div>
      <div className='trendingService'>
        <h1>Trending Services</h1>
        <p>Premium Home Services</p>
        <Service2 />
      </div>
      <div className='trendingService'>
        <h1>Home Appliances Services</h1>
        <p>Premium Home Services</p>
        <Service3 image1={washing} image2={fridge} image3={microwave} image4={ro} image5={tv} image6={splitAc2} title1={"Washing Machine Repair"} title2={"Refrigerator Repair / Service"} title3={"Microwave Repair"} title4={"RO Service"} title5={"LED TV Repair"} title6={"AC Services"} />
      </div>
      <div className='assuredClass'>
        <img src={bookService} alt="" />
      </div>
      <div className='otherServices'>
        <Service4 heading={"Electrician Services"} para={"Premium Services"} image1={mcb} image2={switches} image3={wiring} image4={appliance} image5={chandelier} image6={doorBell} title1={"MCB & Fuse"} title2={"Switch & Socket"} title3={"Wiring"} title4={"Appliances"} title5={"Chandelier"} title6={"Door Bell"} titlea={"Repairing & Installation"} titleb={"Shower, Faucets & Holder Installation & Repair"} titlec={"Toilet pot, Sink, Bathroom, Balcony pipe"} titled={"Painting, Clock & Photoframe"} titlee={"Holder, Hanger, Rod Installation"} titlef={"Bed, Table, Rack & Cabinet"} />
      </div>
      <div className='otherServices'>
        <Service4 heading={"Plumber Services"} para={"Premium Services"} image1={Basin} image2={Bath} image3={Blockage} image4={Drill} image5={Minor} image6={Tap} title1={"Wash Basin &Sink"} title2={"Bath Fitings"} title3={"Blockage"} title4={"Drill & Hole"} title5={"Minor Installations"} title6={"Mixer, Top & Nozzle"} titlea={"Repairing & Installation"} titleb={"Shower, Faucets & Holder Installation & Repair"} titlec={"Toilet pot, Sink, Bathroom, Balcony pipe"} titled={"Painting, Clock & Photoframe"} titlee={"Holder, Hanger, Rod Installation"} titlef={"Bed, Table, Rack & Cabinet"} />
      </div>
      <div className='otherServices'>
        <Service4 heading={"Carpenter Services"} para={"Premium Services"} image1={Bed} image2={Curtain} image3={Door} image4={Drawer} image5={Fitting} image6={Furniture} title1={"Bed"} title2={"Curtain & Blinds"} title3={"Door"} title4={"Drawer & Cupboard"} title5={"Fittings & Installations"} title6={"Furniture Assembly"} titlea={"Repairing & Installation"} titleb={"Shower, Faucets & Holder Installation & Repair"} titlec={"Toilet pot, Sink, Bathroom, Balcony pipe"} titled={"Painting, Clock & Photoframe"} titlee={"Holder, Hanger, Rod Installation"} titlef={"Bed, Table, Rack & Cabinet"} />
      </div>
      <div className='Benefits'>
        <div>
          <img src={benefits} alt="" />
        </div>
        <div className='Benefits_div2'>
          <h1>Why People Choose Us</h1>
          <ul>
            <li>Affordable Dates</li>
            <li>On Time Service</li>
            <li>Verified Professionals</li>
            <li>Excellent Service</li>
          </ul>
        </div>
      </div>
      <div className='trendingService'>
        <h1>What our customers say</h1>
        <Reviews para={"Speaker/View Details Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus eleifend augue volutpat hendrerit."} name={"Ritu Kumar"} />
      </div>
      <div className='assuredClass'>
        <img src={Refer} alt="" />
      </div>
      <div className='assuredClass'>
        <img src={Stamp } alt="" />
      </div>
    </div>
  )
}
