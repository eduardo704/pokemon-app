import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({ selector: 'app-pokemon-list', templateUrl: './pokemon-list.component.html', styleUrls: ['./pokemon-list.component.sass'] })
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[];
  searchQuery = '';

  constructor(public pokemonService: PokemonService, private router: Router, ) { }

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

  searchPokemon() {
    if (this.searchQuery !== '') {
      if (isNaN(+this.searchQuery)) {
        this.pokemonService.getPokemon(this.searchQuery).subscribe(
          pokemon => {
            this.pokemonService.pokemon = pokemon;
            this.router.navigate(['/pokemon', pokemon.id]);
          },
          error => {
            alert('Pokemon ' + this.searchQuery + ' not found')
          }
        );
      } else {
        const number = Number.parseInt(this.searchQuery);
        if (number > 0 && number < 792) {
          this.router.navigate(['/pokemon', number]);
        } else {
          alert('invalid pokemon id');
        }
      }
    }
  }

  goToRandomPokemon() {
    const random = Math.floor(Math.random() * 721) + 1;
    this.router.navigate(['/pokemon', random]);
  }

}
