import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthBarComponent } from './health-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

describe('HealthBarComponent', () => {
  let component: HealthBarComponent;
  let fixture: ComponentFixture<HealthBarComponent>;
  let view: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthBarComponent ],
      imports: [MatProgressBarModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthBarComponent);
    view = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('value should be 30', () => {
    component.value = 30;
    expect(view.innerHTML).toContain('30');
  });
});
