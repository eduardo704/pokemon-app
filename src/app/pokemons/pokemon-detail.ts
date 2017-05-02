import { Pokemon } from './pokemon';

export interface PokemonDetail extends Pokemon {
    stats: Stats[];
    weight: number;
    height: number;
    types: Type[];
}

export interface Stats {
    name: string;
    value: number;
}

export interface Type {
    name: string;
    color: string;
}

export interface PokeComent {
    coment: string;
    author: string;
}



export namespace EmptyInterfaces {
    export const emptyPokemonDetail: PokemonDetail = {
        height: 0,
        id: 0,
        weight: 0,
        image: '',
        name: '',
        url: '',
        stats: [],
        types: []
    }
}