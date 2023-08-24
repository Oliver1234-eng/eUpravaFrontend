import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotvrdjivanjeUgovoraNotarComponent } from './potvrdjivanje-ugovora-notar.component';

describe('PotvrdjivanjeUgovoraNotarComponent', () => {
  let component: PotvrdjivanjeUgovoraNotarComponent;
  let fixture: ComponentFixture<PotvrdjivanjeUgovoraNotarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotvrdjivanjeUgovoraNotarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotvrdjivanjeUgovoraNotarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
