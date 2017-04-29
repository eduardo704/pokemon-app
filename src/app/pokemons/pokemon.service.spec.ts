import { TestBed, inject } from '@angular/core/testing';
import {Http, Response} from '@angular/http';
import { PokemonService } from './pokemon.service';
import { HttpModule } from '@angular/http';

describe('PokemonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpModule],
      providers: [PokemonService]
    });
  });

  it('should ...', inject([PokemonService], (service: PokemonService) => {
    expect(service).toBeTruthy();
  }));
});
