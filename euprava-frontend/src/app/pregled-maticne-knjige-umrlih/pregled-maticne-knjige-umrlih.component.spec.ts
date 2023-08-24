import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledMaticneKnjigeUmrlihComponent } from './pregled-maticne-knjige-umrlih.component';

describe('PregledMaticneKnjigeUmrlihComponent', () => {
  let component: PregledMaticneKnjigeUmrlihComponent;
  let fixture: ComponentFixture<PregledMaticneKnjigeUmrlihComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregledMaticneKnjigeUmrlihComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledMaticneKnjigeUmrlihComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
