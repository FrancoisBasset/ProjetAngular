import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonComponent } from './pokemon.component';
import { ElementRef } from '@angular/core';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;
  let view: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    view = fixture.elementRef.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    // component.truc = 2
    // fixture.detectChanges()
    expect(view.innerHTML).toContain('Ditto');
  });
});
