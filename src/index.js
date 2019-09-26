import React from 'react';
import ReactDOM from 'react-dom';
import SimpleGoldenAcornApp from './SimpleGoldenAcornApp'
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" component={Home} />
                    <Route path="/simple/states/" component={SimpleGoldenAcornApp} /> 
                </div>
            </BrowserRouter>
        )
    }
}

const mountNode = document.getElementById('root');
ReactDOM.render(<App />, mountNode);