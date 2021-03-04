import React from 'react';
import Pokemon from './Pokemon';
// import Button from './Button.js';

class Pokedex extends React.Component {
  render () {
    const { pokemons } = this.props;
      return (
        <div>
          {pokemons.map((pokemon, index) => {
            if (index === this.props.index) {
              return <Pokemon key={pokemon.id} pokemon={pokemon} />
            }
            return null;
          })}
        </div>
      );
  }
}

// class Pokedex extends React.Component {
    
//     constructor() {
//       super();
//       this.filtermap = this.filtermap.bind(this);
//     }
    

//     filtermap () {
//       const { pokemons, index } = this.props;
//       const elemento = pokemons.map((pokemon, index1) => {
//         if (index1 === this.props.index) {
//           return <Pokemon pokemon={pokemon} />
//         } 
//         return null;
//       })
//       return elemento;
//     }

//     render() {
//       return (   
//         <div className='pokedex'>
//           { this.filtermap }
//         </div>
//       );
//     }
// }

export default Pokedex;