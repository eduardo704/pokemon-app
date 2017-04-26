import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { PokemonDetail, Stats } from '../pokemon-detail';
import { PokeComent } from '../poke-coment';
import 'rxjs/add/operator/switchMap';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({ selector: 'app-pokemon-detail', templateUrl: './pokemon-detail.component.html', styleUrls: ['./pokemon-detail.component.sass'] })
export class PokemonDetailComponent implements OnInit {
  id: number;
  pokemon: PokemonDetail;
  pokeObservable: FirebaseObjectObservable<any>;
  pokeComentObservable: FirebaseListObservable<any>;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private af: AngularFire, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.form = this
      .formBuilder
      .group({
        comment: ['', Validators.required],
        author: ['', Validators.required],
      })


    this
      .route
      .params
      .subscribe(params => {
        this.id = +params['id'];
        this.pokeObservable = this
          .af
          .database
          .object('/pokemons/' + this.id);

        this
          .pokeObservable
          .subscribe(pokemonFire => {
            if (pokemonFire.$value !== null) {
              this.pokemon = pokemonFire;
              this.initFirebaseComent();
            } else {
              this
                .pokemonService
                .getPokemon(this.id)
                .subscribe(pokemon => {
                  console.log(pokemon);
                  this.pokemon = pokemon;
                  this
                    .pokeObservable
                    .update(this.pokemon);
                  this.initFirebaseComent();
                });
            }
          });
      });
  }

  initFirebaseComent() {
    this.pokeComentObservable = this
      .af
      .database
      .list('/pokemons/' + this.id + '/coments')
    console.log('init')
  }

  addComment() {
    console.log(this.form.value);
    this.pokeComentObservable.push(this.form.value) 
  }

}
