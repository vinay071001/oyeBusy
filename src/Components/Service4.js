import React from 'react'

export default function Service4(props) {
    return (
        <div className='services4'>
            <div>
                <h1>{props.heading}</h1>
                <p id='subtitle'>{props.para}</p>
            </div>
            <div id='innerdiv'>
                <div>
                    <img src={props.image1} alt="" />
                    <h3>{props.title1}</h3>
                    <p>{props.titlea}</p>
                </div>
                <div>
                    <img src={props.image2} alt="" />
                    <h3>{props.title2}</h3>
                    <p>{props.titleb}</p>
                </div>
                <div>
                    <img src={props.image3} alt="" />
                    <h3>{props.title3}</h3>
                    <p>{props.titlec}</p>
                </div>
                <div>
                    <img src={props.image4} alt="" />
                    <h3>{props.title4}</h3>
                    <p>{props.titled}</p>
                </div>
                <div>
                    <img src={props.image5} alt="" />
                    <h3>{props.title5}</h3>
                    <p>{props.titlee}</p>
                </div>
                <div>
                    <img src={props.image6} alt="" />
                    <h3>{props.title6}</h3>
                    <p>{props.titlef}</p>
                </div>
            </div>
        </div>
    )
}
