import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import logo from '../logo.svg';
import Protagonist, { HighlightJS } from '../components';

import './App.css';
import './github-gist.css';

const data = {};

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Protagonist-React</h2>
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
        <HighlightJS code={JSON.stringify(data)} />
      </section>
      <br />
      <section className="App-render">
        <Container>
          <Row>
            <Col>
              <Protagonist source={{}} />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default App;
