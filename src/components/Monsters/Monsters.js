import React, { Component } from 'react';
import './Monsters.scss';

class Monsters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMonster: '',
            lowlife: 'yes',
        };
        this.toggleMonster = this.toggleMonster.bind(this);
    }

    toggleMonster(name) {
        console.log('grobon', name);
        this.setState({activeMonster: name});
    }

    componentDidMount() {
        this.setState({activeMonster: this.props.monsters[0].name});
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
                    <div>
                        <p>Location: {elem.location}</p>
                    </div>
                )}
                </section>

            </div>
        )
    }
}

export default Monsters;
