import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Pokemon } from './pokemon';
import { PokemonDetail, Stats, EmptyInterfaces, Type } from './pokemon-detail';
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {
  private Url = 'http://pokeapi.co/api/v2/pokemon/';
  private offString = '?offset=';
  public offset = 0;

  public pokemon: PokemonDetail = Object.assign({}, EmptyInterfaces.emptyPokemonDetail);

  constructor(private http: Http) { }

  getPokemons(): Observable<Pokemon[]> {
    return this
      .http
      .get(this.Url + this.offString + this.offset)
      .map(this.extractListData);
  }

  getPokemon(id): Observable<PokemonDetail> {
    if (this.pokemon.id === id) {
      return Observable.from([this.pokemon]);
    } else {
      return this
        .http
        .get(this.Url + id)
        .map(this.extractDetailData);
    }
  }

  getNextPokemons(): Observable<Pokemon[]> {
    this.offset += 20;
    return this.getPokemons();
  }

  getPreviousPokemons(): Observable<Pokemon[]> {
    this.offset -= 20;
    return this.getPokemons();
  }

  private extractDetailData(res: Response) {
    const body = res.json();
    console.log(body)
    let response = <PokemonDetail>{};
    response.name = body.name;
    response.height = body.height;
    response.weight = body.weight;
    response.types = body.types.map(type => {
      let newtype = <Type>{};
      newtype.name = type.type.name;
      newtype.color = '#' + setTypeColor(newtype.name);
      return newtype;
    });
    response.stats = body.stats.map(stat => {
      let newStat = <Stats>{};
      newStat.name = stat.stat.name;
      newStat.value = stat.base_stat;
      return newStat;
    });
    response.id = body.id;
    response.image = getImage(response.id);
    return response;
  }

  private extractListData(res: Response) {
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

function setTypeColor(TypeName: string): string {
  if (TypeName === 'normal') {
    return 'A8A77A';
  } else if (TypeName === 'fire') {
    return 'EE8130';
  } else if (TypeName === 'water') {
    return '6390F0';
  } else if (TypeName === 'eletric') {
    return 'F7D02C';
  } else if (TypeName === 'grass') {
    return '7AC74C';
  } else if (TypeName === 'ice') {
    return '96D9D6';
  } else if (TypeName === 'fighting') {
    return 'C22E28';
  } else if (TypeName === 'poison') {
    return 'A33EA1';
  } else if (TypeName === 'ground') {
    return 'E2BF65';
  } else if (TypeName === 'flying') {
    return 'A98FF3';
  } else if (TypeName === 'psychic') {
    return 'F95587';
  } else if (TypeName === 'bug') {
    return 'A6B91A';
  } else if (TypeName === 'rock') {
    return 'B6A136';
  } else if (TypeName === 'ghost') {
    return '735797';
  } else if (TypeName === 'dragon') {
    return '6F35FC';
  } else if (TypeName === 'dark') {
    return '705746';
  } else if (TypeName === 'steel') {
    return 'B7B7CE';
  } else if (TypeName === 'fairy') {
    return 'D685AD';
  } else {
    return 'E2BF65';
  }
}

function getImage(id: number): string { return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`; }