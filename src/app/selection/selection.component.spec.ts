import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SelectionComponent } from './selection.component';
import { PokeApiService } from '../services';
import { routes } from '../app-routing.module'
import { PokemonComponent } from '../pokemon/pokemon.component';
import { MenuComponent } from '../menu/menu.component';
import { FightComponent } from '../fight/fight.component';
import { LogComponent } from '../log/log.component';
import { Pikachu, Ditto } from 'src/pokemons';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HealthBarComponent } from '../health-bar/health-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DateToStringPipe } from '../shared/pipes/date-to-string.pipe';
import { CodeToStringPipe } from '../shared/pipes/code-to-string.pipe';
import { MatDialogModule } from '@angular/material/dialog';

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
        LogComponent,
        HealthBarComponent,
        DateToStringPipe,
        CodeToStringPipe
      ],
      providers: [
        PokeApiService
      ],
      imports: [
        HttpClientTestingModule,
        MatProgressBarModule,
        MatDialogModule,
        RouterTestingModule.withRoutes(routes)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    pokeApi = TestBed.get(PokeApiService);
    jest.spyOn(pokeApi, 'getRandomPokemons').mockImplementation( key => of([Pikachu, Ditto]) );
    fixture = TestBed.createComponent(SelectionComponent);
    view = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain Pikachu (image URL)', () => {
    expect(view.innerHTML).toContain('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png');
  });

  it('should contain Ditto (image URL)', () => {
    expect(view.innerHTML).toContain('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png');
  });
});
