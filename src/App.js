import React, { Component } from 'react';
import database from './firebase.js'
import './App.css';

class App extends Component {
    constructor (props) {
        super (props);
        // set initial state of db
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        console.log ("I DID MOUNT")
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">React And Firebase App</h1>
                </header>
                <pre className="App--data">
                    One day, some data from Firebase will go here.
        </pre>
            </div>
        );
    }
}

export default App;
