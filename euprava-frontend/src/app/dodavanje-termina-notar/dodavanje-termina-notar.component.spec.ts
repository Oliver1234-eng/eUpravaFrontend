import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodavanjeTerminaNotarComponent } from './dodavanje-termina-notar.component';

describe('DodavanjeTerminaNotarComponent', () => {
  let component: DodavanjeTerminaNotarComponent;
  let fixture: ComponentFixture<DodavanjeTerminaNotarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodavanjeTerminaNotarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodavanjeTerminaNotarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
