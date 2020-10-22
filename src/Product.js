import React from "react";
import './Product.css'

function Product(props) {
    return (
        <div className='product'>
            <div className='product__info'>
                { props.title? <h1> {props.title} </h1> : <img src={props.titleImage} style={{padding: '20px'}} alt="" />}
                <p>{props.description}</p>

                <div className="product__links">
                    { !props.kup && <a href='#'>Dowiedz się więcej &#62;</a>}
                    <a href='#'>Kup &#62;</a>

                </div>
            </div>
            <img src={props.image} style={{marginTop: `${props.marginTop}`}}/>
        </div>
    )
}

export default Product