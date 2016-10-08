import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Link from './link/Link';
class App extends Component {

    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
        this.handleResetClick = this.handleResetClick.bind(this)

        this.state = {
            numberOfClicks: 0,
            users: [
                {
                    id: 1,
                    name: 'Bill'
                },
                {
                    id: 2,
                    name: 'Steve'
                },
                {
                    id: 3,
                    name: 'John'
                }
            ]

        }    
    }

    handleClick(){
        this.setState({
            numberOfClicks: this.state.numberOfClicks + 1
        })
    }

    handleResetClick(){
        this.setState({
            numberOfClicks: 0
        })
    }

    render() {
        
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React:
                        {this.props.title}</h2>
                </div>                <p className="App-intro">

                <button onClick={this.handleClick}>{this.state.numberOfClicks}</button>
                <button onClick={this.handleResetClick}>Reset</button>
                
                To get started, edit <code>src/App.js</code> and save to reload.

                <Link page="http://wp.pl">Wirtualna </Link>
            </p>
                <ul>
                    {this.state.users.map(
                        user =>
                            <li key={user.id}
                                className={'user-' + user.name}>
                                {user.name}
                            </li>
                    )}
                </ul>
            </div>
        );
    }
}


export default App;
