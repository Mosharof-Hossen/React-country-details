import React from 'react';
import "./CountryCart.css"

const CountryCart = (props) => {
    const cart = props.cart;
    console.log(cart)
    
    return (
        <div className = "head">
            <div >
            <div className ="image-tab">
                <img src= {cart.flag} alt=""/>
                <h2>{cart.name}</h2>
            </div>
            <div className  = "cart-about">
                <p>Native Name: {cart.nativeName}</p>
                <p>Capital : {cart.capital}</p>
                <p>Area : {cart.area}</p>
                <p>Languages: {cart.languages[0].name}</p>
                <p>Population : {cart.population}</p>
                <p>Region : {cart.region}</p>
            </div>
        </div>
        </div>
    );
};

export default CountryCart;