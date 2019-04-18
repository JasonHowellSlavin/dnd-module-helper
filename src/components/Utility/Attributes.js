import React from 'react';
import './Attributes.scss';

// TODO: Refactor CSS for more global naming and use

const Attributes = function (props) {
    return (
     <div className="attributes">
        <div className="title">
            <h3>Attributes</h3>
        </div>
        <section className="attribute-stack">
            <div className="ability">
                <p>AC</p>
                <p>{props.attributes.ac}</p>
            </div>
            <div className="ability">
                <p>HP</p>
                <p>{props.attributes.hp}</p>
            </div>
            <div className="ability">
                <p>Speed:</p>
                <p>{props.attributes.speed}</p>
            </div>
            <div className="ability">
                <p style={{fontSize: '13px'}}>Challange:</p>
                <p>{props.attributes.challange}</p>
            </div>
            <div className="ability longer">
                <p>Damage Immunities</p>
                <p>{props.attributes.damageImmunities.map( (elem, index, array) => index === array.length - 1 ? `${elem}` : `${elem}, ` )}</p>
            </div>
            <div className="ability longer">
                <p>Condition Immunities</p>
                <p>{props.attributes.conditionImmunities.map( (elem, index, array) => index === array.length - 1 ? `${elem}` : `${elem}, ` )}</p>
            </div>
            <div className="ability longer">
                <p>Senses</p>
                <p>{props.attributes.senses.map( (elem, index, array) => index === array.length - 1 ? `${elem}` : `${elem}, ` )}</p>
            </div>
        </section>
     </div>

    )
};

export default Attributes;
