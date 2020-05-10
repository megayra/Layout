import React from 'react';

const Promo = props => {

    return (
        <li className="promo d-flex">
            <div className="info d-flex flex-column justify-content-between">
                <div className="title">{props.title}</div>
                <div className="description">{props.description}</div>
                {props.children}
            </div>
            <img src={props.image}/>
        </li>
    )
}
export default Promo