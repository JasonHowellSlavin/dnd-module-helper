import React, { Component } from 'react';
import Monsters from '../Monsters/Monsters.js';

class Module extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);

        return (
            <div>
                <p>Title: {this.props.title}</p>
                <section className="monsters">
                    {this.props.specifics && this.props.specifics.monsters && <Monsters monsters={this.props.specifics.monsters} />}
                </section>
            </div>
        )
    }
}

export default Module;
