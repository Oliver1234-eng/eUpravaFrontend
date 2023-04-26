import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradjaninKatastarComponent } from './gradjanin-katastar.component';

describe('GradjaninKatastarComponent', () => {
  let component: GradjaninKatastarComponent;
  let fixture: ComponentFixture<GradjaninKatastarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradjaninKatastarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradjaninKatastarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
