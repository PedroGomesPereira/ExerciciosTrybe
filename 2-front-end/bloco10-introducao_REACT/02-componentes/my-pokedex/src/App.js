import React, { Component } from 'react';
import pokemons from './data';
import './App.css';

class App extends Component {
  render() {
    return pokemons.map((item) => 
    <section>
      <div>
        <h1>{item.name}</h1>
        <h1>{item.type}</h1>
        <h1>Average Weight: {item.averageWeight.value}{item.averageWeight.measurementUnit}</h1>
      </div>
      <div><img src={item.image} alt='imagem do pokemon'/></div>
    </section>)
  }
}

export default App;
