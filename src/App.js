import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  GenerateSimpson  from  './GenerateSimpson';
import  DisplaySimpson  from  './DisplaySimpson';


const  sampleSimpson = {
  quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  characterDirection: "Left"
};

class App extends Component {

  state = {
    simpson:  sampleSimpson
  }

  getSimpson() {
    // Récupération du simpson via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        console.log(data)
        this.setState({
          simpson:  data[0],
        });
    });
  }

  render() {
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
        </header>
        <GenerateSimpson  selectSimpson={() =>  this.getSimpson()}  />
        <DisplaySimpson  simpson={this.state.simpson}  />
      </div>
    );
  }
}

export default App;
