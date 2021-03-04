import React from 'react';

class Pokemon extends React.Component {
    render() {
        // const { name, type, averageWeight, image } = this.props;
        const { pokemon } = this.props;

        return (
            <div className="pokemon">
                <div>
                    <p> {pokemon.name} </p>
                    <p> {pokemon.type} </p>
                    <p> {`Average weight: ${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</p>
                </div>
                <img src={pokemon.image} alt={`${pokemon.name} sprite`} />
            </div>
        );
    }
}

export default Pokemon;