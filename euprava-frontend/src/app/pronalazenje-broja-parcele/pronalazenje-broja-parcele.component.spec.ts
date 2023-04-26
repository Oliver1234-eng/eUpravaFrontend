import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronalazenjeBrojaParceleComponent } from './pronalazenje-broja-parcele.component';

describe('PronalazenjeBrojaParceleComponent', () => {
  let component: PronalazenjeBrojaParceleComponent;
  let fixture: ComponentFixture<PronalazenjeBrojaParceleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronalazenjeBrojaParceleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronalazenjeBrojaParceleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
