import {Pokemon} from './pokemon';

export interface PokemonDetail extends Pokemon {
    stats : Stats[];
    weight : number;
    height : number;
    types : string[];
}

export interface Stats {
    name : string;
    value : number;
}