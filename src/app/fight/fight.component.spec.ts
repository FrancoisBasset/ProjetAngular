import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightComponent } from './fight.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { LogComponent } from '../log/log.component';
import { PokeApiService } from '../services';
import { Pikachu, Ditto } from 'src/pokemons';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FightComponent', () => {
  let component: FightComponent;
  let fixture: ComponentFixture<FightComponent>;
  let view: any;
  let pokeApi: PokeApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FightComponent,
        LogComponent
      ],
      imports: [HttpClientTestingModule],
      providers: [
        PokeApiService,
        {
          provide: ActivatedRoute, useValue: {
            queryParams: of({
              pokemonA: 'Pikachu',
              pokemonB: 'Ditto'
            })
          }
        }
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
    view = fixture.elementRef.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('should render "Pikachu"', () => {
    expect(view.innerHTML).toContain('Pikachu');
  });

  it('should render "Ditto"', () => {
    expect(view.innerHTML).toContain('Ditto');
  });*/
});
