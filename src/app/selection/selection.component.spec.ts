import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SelectionComponent } from './selection.component';
import { PokeApiService } from '../services';
import { routes } from '../app-routing.module'
import { PokemonComponent } from '../pokemon/pokemon.component';
import { MenuComponent } from '../menu/menu.component';
import { FightComponent } from '../fight/fight.component';
import { LogComponent } from '../log/log.component';
import { Pikachu } from 'src/pokemons';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SelectionComponent', () => {
  let component: SelectionComponent;
  let fixture: ComponentFixture<SelectionComponent>;
  let pokeApi: PokeApiService;
  let view: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SelectionComponent,
        PokemonComponent,
        MenuComponent,
        FightComponent,
        LogComponent
      ],
      providers: [
        PokeApiService
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    pokeApi = TestBed.get(PokeApiService);
    jest.spyOn(pokeApi, 'getByKey').mockImplementation( key => of(Pikachu) );
    fixture = TestBed.createComponent(SelectionComponent);
    view = fixture.elementRef.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain Pikachu (image URL)', () => {
    expect(view.innerHTML).toContain('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png');
  });
});
