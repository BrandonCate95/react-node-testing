import React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component {

  dbRequest = async () => {
    console.log('start request')
    const res = await fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        path: 'test/1',
        data: {
          user: 'btest',
          name: 'bdog'
        }
      })
    })
    console.log(res)
  }

  render(){
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
            Learn React
          </a>
          <button
            onClick={this.dbRequest}
          >Test Database Request</button>
        </header>
      </div>
    );
  }
}

export default App;
