import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PokemonsRoutingModule} from './pokemons-routing.module';
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {PokemonService} from './pokemon.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, PokemonsRoutingModule,  FormsModule, ReactiveFormsModule
  ],
  declarations: [PokemonDetailComponent, PokemonListComponent],
  providers:[PokemonService]
})
export class PokemonsModule {}