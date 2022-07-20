import React from 'react'

export default function Service(props) {
    return (
        <div className='services'>
            <div>
                <img src={props.image1} alt="" />
                <p>{props.title1}</p>
            </div>
            <div>
                <img src={props.image2} alt="" />
                <p>{props.title2}</p>
            </div>
            <div>
                <img src={props.image3} alt="" />
                <p>{props.title3}</p>
            </div>
            <div>
                <img src={props.image4} alt="" />
                <p>{props.title4}</p>
            </div>
            <div>
                <img src={props.image5} alt="" />
                <p>{props.title5}</p>
            </div>
        </div>
    )
}
