import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './not-found.component';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { PokemonsModule } from './pokemons/pokemons.module';
import { AngularFireModule } from 'angularfire2';
import { RouterModule } from '@angular/router';

export const firebaseConfig = {
  apiKey: 'AIzaSyDvWTkIubkb5C_Y0nlpIA5we9zvzeg-nis',
  authDomain: 'pokemon-app-24e69.firebaseapp.com',
  databaseURL: 'https://pokemon-app-24e69.firebaseio.com',
  projectId: 'pokemon-app-24e69',
  storageBucket: 'pokemon-app-24e69.appspot.com',
  messagingSenderId: '575171609804'
};
@NgModule({
  declarations: [
    AppComponent, MyNewComponentComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule, FormsModule, PokemonsModule, AppRoutingModule, RouterModule, HttpModule, AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }