import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazMaticneKnjigeUmrlihNotarComponent } from './prikaz-maticne-knjige-umrlih-notar.component';

describe('PrikazMaticneKnjigeUmrlihNotarComponent', () => {
  let component: PrikazMaticneKnjigeUmrlihNotarComponent;
  let fixture: ComponentFixture<PrikazMaticneKnjigeUmrlihNotarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazMaticneKnjigeUmrlihNotarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazMaticneKnjigeUmrlihNotarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
