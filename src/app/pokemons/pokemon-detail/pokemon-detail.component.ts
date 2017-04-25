import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {PokemonService} from '../pokemon.service';
import {PokemonDetail, Stats} from '../pokemon-detail';
import 'rxjs/add/operator/switchMap';

@Component({selector: 'app-pokemon-detail', templateUrl: './pokemon-detail.component.html', styleUrls: ['./pokemon-detail.component.sass']})
export class PokemonDetailComponent implements OnInit {
  id : number;
  pokemon : PokemonDetail;

  constructor(private route : ActivatedRoute, private pokemonService : PokemonService,) {}

  ngOnInit() {
    this
      .route
      .params
      .subscribe(params => {
        this.id = +params['id'];
        this
          .pokemonService
          .getPokemon(this.id)
          .subscribe(pokemon => {
            console.log(pokemon);
            this.pokemon=pokemon
          });
      });
  }

}
