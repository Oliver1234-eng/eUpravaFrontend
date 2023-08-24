import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodavanjeUgovoraNotarComponent } from './dodavanje-ugovora-notar.component';

describe('DodavanjeUgovoraNotarComponent', () => {
  let component: DodavanjeUgovoraNotarComponent;
  let fixture: ComponentFixture<DodavanjeUgovoraNotarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodavanjeUgovoraNotarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodavanjeUgovoraNotarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
