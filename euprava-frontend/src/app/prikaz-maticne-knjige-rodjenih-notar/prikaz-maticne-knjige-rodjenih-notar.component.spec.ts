import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazMaticneKnjigeRodjenihNotarComponent } from './prikaz-maticne-knjige-rodjenih-notar.component';

describe('PrikazMaticneKnjigeRodjenihNotarComponent', () => {
  let component: PrikazMaticneKnjigeRodjenihNotarComponent;
  let fixture: ComponentFixture<PrikazMaticneKnjigeRodjenihNotarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazMaticneKnjigeRodjenihNotarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazMaticneKnjigeRodjenihNotarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
