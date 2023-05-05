import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledMaticneKnjigeRodjenihComponent } from './pregled-maticne-knjige-rodjenih.component';

describe('PregledMaticneKnjigeRodjenihComponent', () => {
  let component: PregledMaticneKnjigeRodjenihComponent;
  let fixture: ComponentFixture<PregledMaticneKnjigeRodjenihComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregledMaticneKnjigeRodjenihComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledMaticneKnjigeRodjenihComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
