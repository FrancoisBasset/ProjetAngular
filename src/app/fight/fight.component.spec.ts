import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightComponent } from './fight.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { LogComponent } from '../log/log.component';
import { PokeApiService, GameService } from '../services';
import { Pikachu, Ditto } from 'src/pokemons';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HealthBarComponent } from '../health-bar/health-bar.component';
import { DateToStringPipe } from '../shared/pipes/date-to-string.pipe';
import { CodeToStringPipe } from '../shared/pipes/code-to-string.pipe';
import { MatProgressBarModule } from '@angular/material/progress-bar';

describe('FightComponent', () => {
  let component: FightComponent;
  let fixture: ComponentFixture<FightComponent>;
  let pokeApi: PokeApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FightComponent,
        LogComponent,
        HealthBarComponent,
        DateToStringPipe,
        CodeToStringPipe
      ],
      imports: [
        HttpClientTestingModule,
        MatProgressBarModule
      ],
      providers: [
        PokeApiService,
        {
          provide: ActivatedRoute, useValue: {
            queryParams: of({
              pokemonA: 'Pikachu',
              pokemonB: 'Ditto'
            })
          }
        },
        GameService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    pokeApi = TestBed.get(PokeApiService)
    jest.spyOn(pokeApi, 'getByKey')
      .mockImplementationOnce( key => of(Pikachu) )
      .mockImplementationOnce( key => of(Ditto) );
    fixture = TestBed.createComponent(FightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Pikachu as pokemonA (imageURL)', () => {
    const imageUrl = fixture.debugElement.query(By.css('#pokemonA')).properties.src;
    expect(imageUrl).toContain('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png');
  });

  it('should render Ditto as pokemonB (imageURL)', () => {
    const imageUrl = fixture.debugElement.query(By.css('#pokemonB')).properties.src;
    expect(imageUrl).toContain('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png');
  });
});
