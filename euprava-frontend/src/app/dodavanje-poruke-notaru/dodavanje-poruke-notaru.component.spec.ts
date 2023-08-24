import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodavanjePorukeNotaruComponent } from './dodavanje-poruke-notaru.component';

describe('DodavanjePorukeNotaruComponent', () => {
  let component: DodavanjePorukeNotaruComponent;
  let fixture: ComponentFixture<DodavanjePorukeNotaruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodavanjePorukeNotaruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodavanjePorukeNotaruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
