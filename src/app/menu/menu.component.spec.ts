import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MenuComponent } from './menu.component';
import { routes } from '../app-routing.module';
import { SelectionComponent } from '../selection/selection.component';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { FightComponent } from '../fight/fight.component';
import { LogComponent } from '../log/log.component';
import { HealthBarComponent } from '../health-bar/health-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DateToStringPipe } from '../shared/pipes/date-to-string.pipe';
import { CodeToStringPipe } from '../shared/pipes/code-to-string.pipe';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

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
      imports: [
        MatProgressBarModule,
        RouterTestingModule.withRoutes(routes)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
