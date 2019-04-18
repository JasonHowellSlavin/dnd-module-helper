import React, { Component } from 'react';
import './Notes.scss';

// TODO: Refactor CSS for more global naming and use

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="notes">
                <label for="notes">Notes</label>
                <textarea id="notes" name="notes"></textarea>
            </div>
        )
    }
};

export default Notes;
