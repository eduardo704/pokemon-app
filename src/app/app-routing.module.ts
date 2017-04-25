import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MyNewComponentComponent} from './my-new-component/my-new-component.component';
import {PokemonListComponent} from './pokemons/pokemon-list/pokemon-list.component';
import {PageNotFoundComponent} from './not-found.component';

const routes : Routes = [
  {
    path: 'banana',
    component: MyNewComponentComponent
  },
  { path: '',  redirectTo: '/list',  pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}