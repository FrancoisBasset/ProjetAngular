import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightComponent } from './fight.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { LogComponent } from '../log/log.component';

describe('FightComponent', () => {
  let component: FightComponent;
  let fixture: ComponentFixture<FightComponent>;
  let view: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FightComponent,
        LogComponent
      ],
      providers: [
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
