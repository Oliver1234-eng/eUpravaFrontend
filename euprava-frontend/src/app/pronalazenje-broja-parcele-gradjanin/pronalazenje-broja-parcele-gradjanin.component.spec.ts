import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronalazenjeBrojaParceleGradjaninComponent } from './pronalazenje-broja-parcele-gradjanin.component';

describe('PronalazenjeBrojaParceleGradjaninComponent', () => {
  let component: PronalazenjeBrojaParceleGradjaninComponent;
  let fixture: ComponentFixture<PronalazenjeBrojaParceleGradjaninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronalazenjeBrojaParceleGradjaninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronalazenjeBrojaParceleGradjaninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
