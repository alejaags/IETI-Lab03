import React, { Component } from 'react';
import './App.css';
import {Login} from "./component/Login";
import NavigationDrawer from "./component/NavigationDrawer";

class App extends Component {

    constructor(props) {
        super(props);
        localStorage.setItem('username','estudiante');
        localStorage.setItem('password','estudiante');
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {localStorage.getItem('page') === 'home' ?
                        <NavigationDrawer/> :
                        <Login/>
                    }
                </header>
            </div>
        );
    }
}

export default App;
