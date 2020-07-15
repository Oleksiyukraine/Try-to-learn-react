import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);
  return (
      <>
        {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
        <Toast show={show} onClose={() => toggleShow(false)}>
          <Toast.Header>
            <strong className="mr-auto">React-Bootstrap</strong>
          </Toast.Header>
          <Toast.Body>{children}</Toast.Body>
        </Toast>
      </>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React is here
        </a>
        <div>
          <Container className="p-3">
            <Jumbotron>
              <h1 className="header">Welcome To React-Bootstrap</h1>
              <ExampleToast>
                We now have Toasts
                <span role="img" aria-label="tada">!+</span>
              </ExampleToast>
            </Jumbotron>
          </Container>
        </div>
      </header>
    </div>
  );
}

export default App;
