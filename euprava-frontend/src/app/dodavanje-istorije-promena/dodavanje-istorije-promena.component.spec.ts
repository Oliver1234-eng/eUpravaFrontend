import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodavanjeIstorijePromenaComponent } from './dodavanje-istorije-promena.component';

describe('DodavanjeIstorijePromenaComponent', () => {
  let component: DodavanjeIstorijePromenaComponent;
  let fixture: ComponentFixture<DodavanjeIstorijePromenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodavanjeIstorijePromenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodavanjeIstorijePromenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
