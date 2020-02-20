import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SelectionComponent } from './selection.component';
import { PokeApiService } from '../services';
import { routes } from '../app-routing.module'
import { PokemonComponent } from '../pokemon/pokemon.component';
import { MenuComponent } from '../menu/menu.component';
import { FightComponent } from '../fight/fight.component';
import { LogComponent } from '../log/log.component';

describe('SelectionComponent', () => {
  let component: SelectionComponent;
  let fixture: ComponentFixture<SelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SelectionComponent,
        PokemonComponent,
        MenuComponent,
        FightComponent,
        LogComponent
      ],
      providers: [PokeApiService],
      imports: [RouterTestingModule.withRoutes(routes)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
