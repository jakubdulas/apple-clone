import React, { version } from 'react'
import './IPhone.css'

function IPhone(props) {
    return (
        <div className={props.color}>
    
            <div style={{background: `url(${props.background_image})`,
                backgroundSize: `${props.background_size ? props.background_size : '1068px 720px'}`,
                backgroundPosition: `${props.background_position ? props.background_position : 'center -60px'}`,
                backgroundRepeat: 'no-repeat'}} className='iphone__info' >
                {props.title ? <h1>{props.title}</h1> : <img src={props.title_image} />}
                <p>{props.description}</p>
                <div className="iphone__links">
                    <a href='#'>Dowiedz się więcej &#62;</a>
                    <a href='#'>Kup &#62;</a>
                </div>
                <div className='iphone__versions'>
                    <div className='iphone__v1'>
                        <span>{props.verion1_title}</span>
                        <p>
                            {props.version1_first_text}
                        </p>
                        <br />
                        <p>
                            {props.version1_second_text}
                        </p>
                    </div>
                    <div className='iphone__v2'>
                        <span>{props.verion2_title}</span>
                        <p>
                            {props.version2_first_text}
                        </p>
                        <br />
                        <p>
                            {props.version2_second_text}
                        </p>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default IPhone
