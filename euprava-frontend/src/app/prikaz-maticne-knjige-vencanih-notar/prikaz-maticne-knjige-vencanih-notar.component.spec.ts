import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazMaticneKnjigeVencanihNotarComponent } from './prikaz-maticne-knjige-vencanih-notar.component';

describe('PrikazMaticneKnjigeVencanihNotarComponent', () => {
  let component: PrikazMaticneKnjigeVencanihNotarComponent;
  let fixture: ComponentFixture<PrikazMaticneKnjigeVencanihNotarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazMaticneKnjigeVencanihNotarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazMaticneKnjigeVencanihNotarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
