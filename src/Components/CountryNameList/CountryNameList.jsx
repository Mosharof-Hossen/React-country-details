import React from 'react';
import "./CountryNameList.css" 

const CountryNameList = (props) => {
    const {name} = props.country
    return (
        <div >
            <ul className ="name-list-style">
                <li> <h5>{name}</h5></li>
                <button onClick={()=>{props.handelAddDetails(props.country)}} className = "btn btn-primary">Details</button>
            </ul>
        </div>
    );
};

export default CountryNameList;