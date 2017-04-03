import React, { Component } from 'react';
import data from '../data.json';
import logo from '../logo.svg';
import './App.css';
import Protagonist from '../components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <section className="App-summary">
          Intro:
          <ul>
            <li>
              structure
              <ol>
                <li>content</li>
                <li>resources-group</li>
                <li>resources</li>
              </ol>
            </li>
            <li>
              Example
            </li>
          </ul>
        </section>
        <p className="App-content">

        </p>
        <section className="App-example">
          <pre>
          {JSON.stringify(data)}
          </pre>
        </section>
        <br />
        <section className="App-render">
          <Protagonist source={data} />
        </section>
      </div>
    );
  }
}

export default App;
