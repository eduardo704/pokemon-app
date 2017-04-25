import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './not-found.component';

import {AppComponent} from './app.component';
import {MyNewComponentComponent} from './my-new-component/my-new-component.component';
import {PokemonsModule} from './pokemons/pokemons.module';

@NgModule({
  declarations: [
    AppComponent, MyNewComponentComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule, FormsModule, PokemonsModule, AppRoutingModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}