import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodavanjePorukeKatastruComponent } from './dodavanje-poruke-katastru.component';

describe('DodavanjePorukeKatastruComponent', () => {
  let component: DodavanjePorukeKatastruComponent;
  let fixture: ComponentFixture<DodavanjePorukeKatastruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodavanjePorukeKatastruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodavanjePorukeKatastruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
