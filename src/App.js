import React, { Component } from 'react';
import './App.css';
import { database } from './firebase';

class App extends Component {
    constructor (props) {
        super (props);
        // set initial state of db
        this.state = {
            data: null,
            newData: ''
        }
        // bind methods to current version of component
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // react lifecycle methods
    componentDidMount() {
        console.log ("I did mount")
        // database.ref(); - creates connection root node of the tree of json object
        database.ref().on('value', (snapshot) => {
            console.log('the data changed to:' + snapshot.val());
            this.setState ({
                data: snapshot.val()
            })
        } );
        // Runs the arrow function whenever the db changes (console log in this case)
        // Authorize read/write in firebase console -> db -> rules
        // Use snapshot to listen for one single moment
    }

    // component methods
    handleChange(event){
        const newData = event.target.value;
        this.setState({
            newData: newData
            // or just newData (es6 shorthand for the above)
        })
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const newData = database.ref().child('Amazing New Data').set(this.state.newData);

    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">React And Firebase App</h1>
                </header>
                <pre className="App-data">
                    { JSON.stringify(this.state.data, null, 2)}
                </pre>
                <form className="App-form" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.newData} onChange={this.handleChange}/>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default App;
