import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../pokemon';
import {Router} from '@angular/router';

@Component({selector: 'app-pokemon-list', templateUrl: './pokemon-list.component.html', styleUrls: ['./pokemon-list.component.sass']})
export class PokemonListComponent implements OnInit {
  pokemons : Pokemon[];

  constructor(private pokemonService : PokemonService, private router : Router,) {}

  ngOnInit() {
    this
      .pokemonService
      .getPokemons()
      .subscribe(pokemons => {
        this.pokemons = pokemons;
      });
  }

  next() {
    this.pokemons = null;
    this
      .pokemonService
      .getNextPokemons()
      .subscribe(pokemons => {
        this.pokemons = pokemons;
      });
  }

  previous() {
    this.pokemons = null;
    this
      .pokemonService
      .getPreviousPokemons()
      .subscribe(pokemons => {
        this.pokemons = pokemons;
      });

  }
  selectPokemon(pokemon) {
    this
      .router
      .navigate(['/pokemon', pokemon.id]);
  }

}
