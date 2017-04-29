import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonService } from '../pokemon.service';
import { PokemonListComponent } from './pokemon-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import {Observable} from "rxjs/Rx";

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async(() => {
    const pokemonServiceStub = {
      getPokemons() {
       
        const source = Observable.from([[10, 20, 30]]);

        return source;
      }
    };
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PokemonListComponent],
      providers: [{ provide: PokemonService, useValue: pokemonServiceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
