import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';


const routes: Routes = [
  { path: 'list',  component: PokemonListComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule {}