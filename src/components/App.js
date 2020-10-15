import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Header from './Header'
import Content from './Content'

class App extends React.Component {
  render(){
    return (
      <div classNames="App container-fluid">        
        <Header/>
        <Content/>
        {/* <header className="App-header">
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
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
