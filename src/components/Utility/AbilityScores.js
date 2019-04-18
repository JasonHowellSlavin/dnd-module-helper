import React from 'react';
import './AbilityScores.scss';

const AbilityScores = function (props) {

    const outPutModifier = function (abScore) {
        return Math.floor((parseInt(abScore) - 10) / 2);
    }

    return (
     <div className="ability-scores">
        <div className="title">
            <h3>Ability Scores</h3>
        </div>
        {props.abilityScore.map((elem) => {
            return (
            <div className="ability" key={`${props.name} ${elem.ability}`}>
                <p>{elem.ability}: {elem.score}</p>
                <p>Mod: {outPutModifier(elem.score)}</p>
            </div>
            )
        })}
     </div>
    )
};

export default AbilityScores;
