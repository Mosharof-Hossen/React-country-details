import React, { useEffect, useState } from 'react';
import CountryCart from '../CountryCart/CountryCart';
import CountryNameList from '../CountryNameList/CountryNameList';
import "./countryDetails.css"

const CountryDetails = () => {
    const [countries ,setCountries ] = useState([])
    
    useEffect(()=>{
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(country => setCountries(country))
    },[])
    
    const [cart , setCountry] = useState({
        alpha3Code: "AFG",
        name:"Afghanistan",
        flag: "https://restcountries.eu/data/afg.svg",
        nativeName: "افغانستان",
        capital: "Kabul",
        area: 652230,
        population: 27657145,
        region: "Asia",
        borders:["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
        languages:[{name: "Pashto"}]
    })
    const handelAddDetails = (country) =>{
        const newCart = country
        setCountry(newCart) 
    }
    return (
        <div className = "countryDetails">
            <div className="country-name-list">
                <h3>Country Name</h3><hr/>
                <div className = "country-scroll">
                    {
                        countries.map(country =><CountryNameList handelAddDetails ={handelAddDetails} country = {country}></CountryNameList>)
                    }
                </div>
            </div>
            <div className="country-about">
                <CountryCart cart = {cart} ></CountryCart>
            </div>
        </div>
    );
};

export default CountryDetails;