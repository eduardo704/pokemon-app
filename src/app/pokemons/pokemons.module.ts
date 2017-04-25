import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PokemonsRoutingModule} from './pokemons-routing.module';
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {PokemonService} from './pokemon.service';


@NgModule({
  imports: [
    CommonModule, PokemonsRoutingModule
  ],
  declarations: [PokemonDetailComponent, PokemonListComponent],
  providers:[PokemonService]
})
export class PokemonsModule {}