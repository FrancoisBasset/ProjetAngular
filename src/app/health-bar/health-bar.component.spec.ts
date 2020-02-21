import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthBarComponent } from './health-bar.component';

describe('HealthBarComponent', () => {
  let component: HealthBarComponent;
  let fixture: ComponentFixture<HealthBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('value should be 30', () => {
    component.value = 30;
    expect(fixture.nativeElement.innerHTML).toContain('30');
  });
});
