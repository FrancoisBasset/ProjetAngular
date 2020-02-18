import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightComponent } from './fight.component';

describe('FightComponent', () => {
  let component: FightComponent;
  let fixture: ComponentFixture<FightComponent>;
  let view: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightComponent ]
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
