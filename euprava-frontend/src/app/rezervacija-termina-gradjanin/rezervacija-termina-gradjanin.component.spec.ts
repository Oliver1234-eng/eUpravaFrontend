import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervacijaTerminaGradjaninComponent } from './rezervacija-termina-gradjanin.component';

describe('RezervacijaTerminaGradjaninComponent', () => {
  let component: RezervacijaTerminaGradjaninComponent;
  let fixture: ComponentFixture<RezervacijaTerminaGradjaninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezervacijaTerminaGradjaninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezervacijaTerminaGradjaninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
