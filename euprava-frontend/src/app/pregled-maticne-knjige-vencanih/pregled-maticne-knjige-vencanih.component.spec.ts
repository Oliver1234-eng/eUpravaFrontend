import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledMaticneKnjigeVencanihComponent } from './pregled-maticne-knjige-vencanih.component';

describe('PregledMaticneKnjigeVencanihComponent', () => {
  let component: PregledMaticneKnjigeVencanihComponent;
  let fixture: ComponentFixture<PregledMaticneKnjigeVencanihComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregledMaticneKnjigeVencanihComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledMaticneKnjigeVencanihComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
