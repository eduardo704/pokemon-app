import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Pokemon} from './pokemon';
import {PokemonDetail, Stats} from './pokemon-detail';
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {
  private Url = ' http://pokeapi.co/api/v2/pokemon/';
  private offString = '?offset=';
  public offset = 0;
  constructor(private http : Http) {}

  getPokemons() : Observable < Pokemon[] > {
    return this
      .http
      .get(this.Url + this.offString + this.offset)
      .map(this.extractListData);
  }

  getPokemon(id) : Observable < PokemonDetail > {
    return this
      .http
      .get(this.Url + id)
      .map(this.extractDetailData);
  }

  getNextPokemons() : Observable < Pokemon[] > {
    this.offset += 20;
    return this.getPokemons();
  }

  getPreviousPokemons() : Observable < Pokemon[] > {
    this.offset -= 20;
    return this.getPokemons();
  }

  private extractDetailData(res : Response) {
    const body = res.json();
    console.log(body)
    let response = <PokemonDetail>{};
    response.name = body.name;
    response.height=body.height;
    response.weight=body.weight;
    response.types=body.types.map(type=>type.type.name);
    response.stats=body.stats.map(stat=>{
        let newStat = <Stats>{};
        newStat.name=stat.stat.name;
        newStat.value=stat.base_stat;
        return newStat;
    });
    response.id=body.id;
    response.image=getImage(response.id);
    return response;
  }

  private extractListData(res : Response) {
    const body = res.json();
    console.log(body)
    body
      .results
      .forEach(pokemon => {
        const regex = /\d+/g;
        pokemon.id = pokemon
          .url
          .match(regex)[1];
        pokemon.image = getImage(pokemon.id);
      });
    return body.results || {};
  }
}

function getImage(id : number) : string {return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;}