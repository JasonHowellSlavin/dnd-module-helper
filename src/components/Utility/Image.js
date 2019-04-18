import React from 'react';
import './Image.scss';

// TODO: Refactor CSS for more global naming and use

const Attributes = function (props) {
    return (
        <img src={props.url}/>
    )
};

export default Attributes;
