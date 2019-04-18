import React, { Component } from 'react';
import './Monsters.scss';
import AbilityScores from '../Utility/AbilityScores.js';
import Characteristics from '../Utility/Characteristics.js';

class Monsters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMonster: '',
        };
        this.toggleMonster = this.toggleMonster.bind(this);
        this.sortMonstersByModuleNum = this.sortMonstersByModuleNum.bind(this);
    }

    sortMonstersByModuleNum(monsterArr) {
        return monsterArr.sort((a, b) => { return a.moduleNum - b.moduleNum });
    }

    toggleMonster(name) {
        console.log('grobon', name);
        this.setState({activeMonster: name});
    }

    componentDidMount() {
        this.sortMonstersByModuleNum(this.props.monsters);

        this.setState({
            activeMonster: this.props.monsters[0].name,
        });
    }

    render() {
        return (
            <div className="monster-mash">
                <section className="monster-selections">
                    {this.props.monsters.map(elem =>
                        <p
                        onClick={() => this.toggleMonster(elem.name)}
                        className={`monster ${this.state.activeMonster === elem.name ? 'active' : 'inactive'}`}
                        key={elem.name}> {elem.name} </p>
                    )}
                </section>
                <section className="monster-stats">
                {this.props.monsters.map(elem =>
                    elem.name === this.state.activeMonster &&
                    <div key={`stats:${elem.name}`}>
                        <p>Location: {elem.location}</p>
                        <section className="stats-layout">
                            {elem.abilityScores && <AbilityScores abilityScore={elem.abilityScores} name={elem.name} />}
                            {elem.traits && elem.actions && <Characteristics traits={elem.traits} actions={elem.actions} name={elem.name} />}
                        </section>
                        <section>
                        </section>
                    </div>
                )}
                </section>

            </div>
        )
    }
}

export default Monsters;
