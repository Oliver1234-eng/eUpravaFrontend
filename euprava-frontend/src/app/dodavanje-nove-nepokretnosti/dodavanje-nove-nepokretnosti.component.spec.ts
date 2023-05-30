import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodavanjeNoveNepokretnostiComponent } from './dodavanje-nove-nepokretnosti.component';

describe('DodavanjeNoveNepokretnostiComponent', () => {
  let component: DodavanjeNoveNepokretnostiComponent;
  let fixture: ComponentFixture<DodavanjeNoveNepokretnostiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodavanjeNoveNepokretnostiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodavanjeNoveNepokretnostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
