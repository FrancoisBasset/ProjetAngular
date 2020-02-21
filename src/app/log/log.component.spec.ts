import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogComponent } from './log.component';
import { DateToStringPipe } from '../shared/pipes/date-to-string.pipe';
import { CodeToStringPipe } from '../shared/pipes/code-to-string.pipe';

describe('LogComponent', () => {
  let component: LogComponent;
  let fixture: ComponentFixture<LogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LogComponent,
        DateToStringPipe,
        CodeToStringPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
