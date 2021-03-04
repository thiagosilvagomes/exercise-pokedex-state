import React from 'react';
import './App.css';
import pokemons from './data.js';
import Button from './Button.js';
import Pokedex from './Pokedex.js';

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
      index: 0,
      type: 'fire',
      array: pokemons
    }
  }

  nextPokemon() {
    this.setState((previousState, _props) => ({
      index: previousState.index === this.state.array.length - 1 ? 0 : previousState.index + 1,
    }))
  }
  
  render() {
    return (
      <div className="pokemon">
        <h1>Pokedex</h1>
        <Pokedex index={this.state.index} type={this.state.type} pokemons={this.state.array} />
        <Button onClick={this.nextPokemon} text='Next' /> 
      </div>
      
      // <div className="pokemon">
      //   <div>
      //     <p> {this.state.name} </p>
      //     <p> {this.state.type} </p>
      //     <p> {`Average weight: ${this.state.value} ${this.state.measurementUnit}`}</p>
      //   </div>
      //   <img src={this.state.image} alt={`${this.state.name} sprite`} />
      //   
      // </div>
    );
  }
}

export default App;