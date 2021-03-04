import React from 'react';
import './App.css';
import pokemons from './data';
// import Pokedex from './Pokedex';

// function App() {
//   return (
//     <div className="App">
//       <h1> Pokedex </h1>
//       <Pokedex pokemons={pokemons} />
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.nextPokemon = this.nextPokemon.bind(this);
    this.state = {
      name: pokemons[0].name,
      type: pokemons[0].type,
      value: pokemons[0].averageWeight.value,
      measurementUnit: pokemons[0].averageWeight.measurementUnit,
      image: pokemons[0].image
    }
  }

  nextPokemon() {
    // this.setState((previousState, _props) => ({
    //   counter: previousState.counter + 1,
    //   name: previousState.arrayPokemon[counter].name,
    //   value: previousState.arrayPokemon[counter].value,
    //   measurementUnit: previousState.arrayPokemon[counter].measurementUnit,
    //   image: previousState.arrayPokemon[counter].image
    // }))
  }
  
  render() {
    return (
      <div className="pokemon">
        <div>
          <p> {this.state.name} </p>
          <p> {this.state.type} </p>
          <p> {`Average weight: ${this.state.value} ${this.state.measurementUnit}`}</p>
        </div>
        <img src={this.state.image} alt={`${this.state.name} sprite`} />
        <button onClick={this.nextPokemon}>Next</button>
      </div>
      
    );
  }
}

export default App;