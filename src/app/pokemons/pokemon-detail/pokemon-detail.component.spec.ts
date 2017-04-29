import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms'
import { PokemonDetailComponent } from './pokemon-detail.component';
import { PokemonService } from '../pokemon.service';
import {  RouterTestingModule} from '@angular/router/testing';
import { AngularFireModule , AngularFire} from 'angularfire2';


export const firebaseConfig = {
  apiKey: 'AIzaSyDvWTkIubkb5C_Y0nlpIA5we9zvzeg-nis',
  authDomain: 'pokemon-app-24e69.firebaseapp.com',
  databaseURL: 'https://pokemon-app-24e69.firebaseio.com',
  projectId: 'pokemon-app-24e69',
  storageBucket: 'pokemon-app-24e69.appspot.com',
  messagingSenderId: '575171609804'
};


class AngularFireMock extends AngularFire {                   // added this class
 
}

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(async(() => {
    const pokemonServiceStub = {

    }
    TestBed.configureTestingModule({
      declarations: [PokemonDetailComponent],
      imports: [ReactiveFormsModule, RouterTestingModule, AngularFireModule.initializeApp(firebaseConfig),],
      providers: [{ provide: PokemonService, useValue: pokemonServiceStub },  { provide: AngularFire, useClass: AngularFireMock } ]
    })
      .compileComponents();
   // pokemonService = TestBed.get(PokemonService);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
