import React from 'react';
import './Characteristics.scss';

const Characteristics = function (props) {

    const outPutModifier = function (abScore) {
        return Math.floor((parseInt(abScore) - 10) / 2);
    }

    return (
     <div className="characteristics">
        <h3>Traits</h3>
        {props.traits.map((elem) => {
            return (
            <div className="chacteristic-item" key={`${props.name}:${elem.name}`}>
                <p className="name">{elem.name}:</p>
                <p className="desc">{elem.description}</p>
            </div>
            )
        })}
        <h3>Actions</h3>
        {props.actions.map((elem) => {
            return (
            <div className="chacteristic-item" key={`${props.name} ${elem.name}`}>
                <p className="name">{elem.name}:</p>
                <p className="desc">{elem.description}</p>
            </div>
            )
        })}
     </div>
    )
};

export default Characteristics;
